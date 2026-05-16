import React from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Appointment } from '../../api/appointments.api';
import { Theme } from '../../constants/theme';
import { useAuth } from '../../hook/useAuth';
import { useCancelAppointment } from '../../hook/useCancelAppointment';
import { useUserAppointments } from '../../hook/useUserAppointments';
import ScreenLayout from '../../layout/ScreenLayout';
import { ProfileStackParamList } from '../../navigation/types';
import { BackHeader } from '../../ui/BackIcon/BackHeader';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import { Icon } from '../../ui/Icon/Icon';

import { styles } from './VisitHistoryScreen.style';

type Navigation = NativeStackNavigationProp<
  ProfileStackParamList,
  'VisitHistory'
>;

const formatVisitDate = (timestamp: number) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(timestamp));

const formatVisitTime = (timestamp: number) =>
  new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(timestamp));

const formatPolicyDate = (timestamp: number) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(timestamp));

const getStatusStyle = (status: Appointment['status']) => {
  if (status === 'missed') {
    return styles.statusMissed;
  }

  if (status === 'cancelled') {
    return styles.statusCancelled;
  }

  if (status === 'completed') {
    return styles.statusCompleted;
  }

  return styles.statusUpcoming;
};

const getStatusLabel = (status: Appointment['status']) => {
  if (status === 'missed') {
    return 'Missed appointment';
  }

  return status;
};

const VisitHistoryScreen = () => {
  const navigation = useNavigation<Navigation>();
  const { userProfile } = useAuth();
  const {
    data: appointments = [],
    isLoading,
    isError,
    refetch,
  } = useUserAppointments(userProfile?.id);
  const cancelMutation = useCancelAppointment();

  const handleCancel = (appointment: Appointment) => {
    if (!userProfile) {
      Alert.alert('Error', 'Please log in before cancelling an appointment.');
      return;
    }

    cancelMutation.mutate(
      {
        appointmentId: appointment.id,
        slotId: appointment.slotId,
        userId: userProfile.id,
      },
      {
        onSuccess: () => {
          Alert.alert('Cancelled', 'Appointment cancelled successfully.');
        },
        onError: () => {
          Alert.alert(
            'Error',
            'Unable to cancel appointment. Contact the clinic for help.',
          );
        },
      },
    );
  };

  const renderAppointment = ({ item }: { item: Appointment }) => {
    const isCancelling =
      cancelMutation.isPending &&
      cancelMutation.variables?.appointmentId === item.id;
    const canCancel =
      item.status === 'upcoming' &&
      (!item.cancelAllowedUntil || Date.now() <= item.cancelAllowedUntil);
    const isRefundEligible =
      item.status === 'upcoming' &&
      item.refundEligibleUntil &&
      Date.now() <= item.refundEligibleUntil;
    const isRefundCutoffExpired =
      item.status === 'upcoming' &&
      item.refundEligibleUntil &&
      Date.now() > item.refundEligibleUntil;

    const isCompleted = item.status === 'completed';

    return (
      <TouchableOpacity
        activeOpacity={isCompleted ? 0.85 : 1}
        style={styles.card}
        disabled={!isCompleted}
        onPress={() =>
          navigation.navigate('VisitDetails', { appointmentId: item.id })
        }
      >
        <View style={styles.cardHeader}>
          <View style={styles.cardTitleBlock}>
            <Text style={styles.doctorName}>{item.doctorName}</Text>
            <Text style={styles.services}>{item.serviceType.join(', ')}</Text>
          </View>

          <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
            <Text style={styles.statusText}>{getStatusLabel(item.status)}</Text>
          </View>
        </View>

        <View style={styles.metaRow}>
          <Icon name="schedule" size={18} color={Theme.colors.icon.primary} />
          <Text style={styles.metaText}>{formatVisitDate(item.startTime)}</Text>
          <Text style={styles.metaDivider}>-</Text>
          <Text style={styles.metaText}>{formatVisitTime(item.startTime)}</Text>
        </View>

        {item.status === 'missed' && (
          <View style={styles.policyNote}>
            <Text style={styles.policyText}>You missed this appointment.</Text>

            {item.missedNonRefundable && (
              <Text style={styles.policyText}>
                Payment is non-refundable according to clinic policy.
              </Text>
            )}
          </View>
        )}

        {item.status === 'upcoming' && isRefundEligible && (
          <Text style={styles.helperText}>
            Refund eligible if cancelled before{' '}
            {formatPolicyDate(item.refundEligibleUntil)}.
          </Text>
        )}

        {item.status === 'upcoming' && isRefundCutoffExpired && canCancel && (
          <Text style={styles.warningText}>
            Refund may no longer be available according to clinic policy.
          </Text>
        )}

        {item.status === 'upcoming' && canCancel && (
          <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.cancelButton, isCancelling && styles.disabledButton]}
            onPress={() => handleCancel(item)}
            disabled={isCancelling}
          >
            <Text style={styles.cancelButtonText}>
              {isCancelling ? 'Cancelling...' : 'Cancel Appointment'}
            </Text>
          </TouchableOpacity>
        )}

        {item.status === 'upcoming' && !canCancel && (
          <View style={styles.contactClinicBox}>
            <Text style={styles.contactClinicText}>
              Contact clinic to make changes.
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <ScreenLayout
      defaultPadding
      statusBarBackgroundColor={Theme.colors.statusBar.primary}
    >
      <BackHeader title="Visit History" />

      {isLoading ? (
        <View style={styles.center}>
          <ActivityIndicator size={36} />
        </View>
      ) : isError ? (
        <View style={styles.center}>
          <Text style={styles.emptyTitle}>Unable to load visits</Text>
          <Text style={styles.emptyText}>Please try again in a moment.</Text>
          <CustomBtn
            title="Retry"
            onPress={() => refetch()}
            style={styles.retryButton}
          />
        </View>
      ) : (
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={renderAppointment}
          ListEmptyComponent={
            <View style={styles.emptyCard}>
              <Text style={styles.emptyTitle}>No visits yet</Text>
              <Text style={styles.emptyText}>
                Your appointments will appear here after booking.
              </Text>
            </View>
          }
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </ScreenLayout>
  );
};

export default VisitHistoryScreen;
