import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Theme } from '../../constants/theme';
import { useAuth } from '../../hook/useAuth';
import { useCancelAppointment } from '../../hook/useCancelAppointment';
import { useUserAppointments } from '../../hook/useUserAppointments';
import { Appointment } from '../../interfaces/appointment.types';
import ScreenLayout from '../../layout/ScreenLayout';
import { RootStackParamList } from '../../navigation/types';
import { BackHeader } from '../../ui/BackIcon/BackHeader';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import { Icon } from '../../ui/Icon/Icon';
import {
  AppointmentStatusFilter,
  filterAppointmentsByStatus,
  getAppointmentStatusCounts,
  getAppointmentStatusLabel,
} from '../../utils/Appointment/appointmentFilters';
import { formatPolicyDate } from '../../utils/Date/formatPolicyDate';
import {
  formatVisitDate,
  formatVisitTime,
} from '../../utils/Visit/visitFormatters';

import { styles } from './VisitHistoryScreen.style';

type Navigation = NativeStackNavigationProp<RootStackParamList, 'VisitHistory'>;

const STATUS_FILTERS: Array<{ label: string; value: AppointmentStatusFilter }> = [
  { label: 'All', value: 'all' },
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Completed', value: 'completed' },
  { label: 'Cancelled', value: 'cancelled' },
  { label: 'Missed', value: 'missed' },
];

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

const getStatusTextStyle = (status: Appointment['status']) => {
  if (status === 'missed') {
    return styles.statusTextMissed;
  }

  if (status === 'cancelled') {
    return styles.statusTextCancelled;
  }

  if (status === 'completed') {
    return styles.statusTextCompleted;
  }

  return styles.statusTextUpcoming;
};

const getTimelineMarkerStyle = (status: Appointment['status']) => {
  if (status === 'missed') {
    return styles.timelineMarkerMissed;
  }

  if (status === 'cancelled') {
    return styles.timelineMarkerCancelled;
  }

  if (status === 'completed') {
    return styles.timelineMarkerCompleted;
  }

  return styles.timelineMarkerUpcoming;
};

const VisitHistoryScreen = () => {
  const navigation = useNavigation<Navigation>();
  const { userProfile } = useAuth();
  const [selectedStatus, setSelectedStatus] =
    useState<AppointmentStatusFilter>('all');

  const {
    data: appointments = [],
    isLoading,
    isError,
    refetch,
  } = useUserAppointments(userProfile?.id);

  const cancelMutation = useCancelAppointment();

  const statusCounts = useMemo(
    () => getAppointmentStatusCounts(appointments),
    [appointments],
  );

  const filteredAppointments = useMemo(
    () => filterAppointmentsByStatus(appointments, selectedStatus),
    [appointments, selectedStatus],
  );

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
      <View style={styles.timelineRow}>
        <View style={styles.timelineRail}>
          <View style={styles.timelineLine} />
          <View
            style={[styles.timelineMarker, getTimelineMarkerStyle(item.status)]}
          />
        </View>

        <TouchableOpacity
          activeOpacity={isCompleted ? 0.85 : 1}
          style={styles.card}
          disabled={!isCompleted}
          onPress={() =>
            navigation.navigate('VisitDetails', { appointmentId: item.id })
          }
        >
          <View style={styles.cardTop}>
            <View style={styles.avatarContainer}>
              <Image
                source={
                  item.doctorImage
                    ? { uri: item.doctorImage }
                    : require('../../assets/images/doctor.jpg')
                }
                style={styles.doctorAvatar}
                resizeMode="cover"
              />
            </View>

            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <View style={styles.cardTitleBlock}>
                  <Text style={styles.doctorName} numberOfLines={1}>
                    {item.doctorName}
                  </Text>

                  <Text style={styles.services} numberOfLines={2}>
                    {item.serviceType.join(', ')}
                  </Text>
                </View>

                <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
                  <Text
                    style={[
                      styles.statusText,
                      getStatusTextStyle(item.status),
                    ]}
                  >
                    {getAppointmentStatusLabel(item.status)}
                  </Text>
                </View>
              </View>

              <View style={styles.metaRow}>
                <View style={styles.metaIconBox}>
                  <Icon
                    name="schedule"
                    size={16}
                    color={Theme.colors.icon.primary}
                  />
                </View>

                <Text style={styles.metaText}>
                  {formatVisitDate(item.startTime)}
                </Text>

                <Text style={styles.metaDivider}>-</Text>

                <Text style={styles.metaText}>
                  {formatVisitTime(item.startTime)}
                </Text>
              </View>
            </View>
          </View>

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
              style={[
                styles.cancelButton,
                isCancelling && styles.disabledButton,
              ]}
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
      </View>
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
          ListHeaderComponent={
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filterList}
            >
              {STATUS_FILTERS.map(filter => {
                const isActive = selectedStatus === filter.value;

                return (
                  <TouchableOpacity
                    key={filter.value}
                    activeOpacity={0.85}
                    style={[
                      styles.filterChip,
                      isActive && styles.filterChipActive,
                    ]}
                    onPress={() => setSelectedStatus(filter.value)}
                  >
                    <Text
                      style={[
                        styles.filterText,
                        isActive && styles.filterTextActive,
                      ]}
                    >
                      {filter.label}
                    </Text>

                    <View
                      style={[
                        styles.filterCount,
                        isActive && styles.filterCountActive,
                      ]}
                    >
                      <Text
                        style={[
                          styles.filterCountText,
                          isActive && styles.filterCountTextActive,
                        ]}
                      >
                        {statusCounts[filter.value]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          }
          data={filteredAppointments}
          keyExtractor={item => item.id}
          renderItem={renderAppointment}
          ListEmptyComponent={
            <View style={styles.emptyCard}>
              <Text style={styles.emptyTitle}>
                {selectedStatus === 'all'
                  ? 'No visits yet'
                  : `No ${selectedStatus} visits`}
              </Text>
              <Text style={styles.emptyText}>
                {selectedStatus === 'all'
                  ? 'Your appointments will appear here after booking.'
                  : 'Visits with this status will appear here when available.'}
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
