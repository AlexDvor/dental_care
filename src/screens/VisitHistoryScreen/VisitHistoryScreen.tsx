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

import { Appointment } from '../../api/appointments.api';
import { Theme } from '../../constants/theme';
import { useAuth } from '../../hook/useAuth';
import { useCancelAppointment } from '../../hook/useCancelAppointment';
import { useUserAppointments } from '../../hook/useUserAppointments';
import ScreenLayout from '../../layout/ScreenLayout';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import { Icon } from '../../ui/Icon/Icon';

import { styles } from './VisitHistoryScreen.style';

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

const getStatusStyle = (status: Appointment['status']) => {
  if (status === 'cancelled') {
    return styles.statusCancelled;
  }

  if (status === 'completed') {
    return styles.statusCompleted;
  }

  return styles.statusUpcoming;
};

const VisitHistoryScreen = () => {
  const navigation = useNavigation();
  const { userProfile } = useAuth();
  const {
    data: appointments = [],
    isLoading,
    isError,
    refetch,
  } = useUserAppointments(userProfile?.id);
  const cancelMutation = useCancelAppointment();

  const handleCancel = (appointment: Appointment) => {
    cancelMutation.mutate(
      {
        appointmentId: appointment.id,
        slotId: appointment.slotId,
      },
      {
        onSuccess: () => {
          Alert.alert('Cancelled', 'Appointment cancelled successfully.');
        },
        onError: () => {
          Alert.alert('Error', 'Unable to cancel appointment. Try again.');
        },
      },
    );
  };

  const renderAppointment = ({ item }: { item: Appointment }) => {
    const isCancelling =
      cancelMutation.isPending &&
      cancelMutation.variables?.appointmentId === item.id;

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardTitleBlock}>
            <Text style={styles.doctorName}>{item.doctorName}</Text>
            <Text style={styles.services}>{item.serviceType.join(', ')}</Text>
          </View>

          <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>

        <View style={styles.metaRow}>
          <Icon name="schedule" size={18} color={Theme.colors.icon.primary} />
          <Text style={styles.metaText}>{formatVisitDate(item.startTime)}</Text>
          <Text style={styles.metaDivider}>•</Text>
          <Text style={styles.metaText}>{formatVisitTime(item.startTime)}</Text>
        </View>

        {item.status === 'upcoming' && (
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
      </View>
    );
  };

  return (
    <ScreenLayout
      defaultPadding
      statusBarBackgroundColor={Theme.colors.statusBar.primary}
    >
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow_l" size={20} color={Theme.colors.text.primary} />
        </TouchableOpacity>

        <Text style={styles.title}>Visit History</Text>
      </View>

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
