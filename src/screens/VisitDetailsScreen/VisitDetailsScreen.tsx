import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { Theme } from '../../constants/theme';
import { useAppointmentReview } from '../../hook/useAppointmentReview';
import { useAppointmentTreatmentPlans } from '../../hook/useAppointmentTreatmentPlans';
import { useAuth } from '../../hook/useAuth';
import { useCreateDoctorReview } from '../../hook/useCreateDoctorReview';
import { useUserAppointments } from '../../hook/useUserAppointments';
import { useVisitRecord } from '../../hook/useVisitRecord';
import ScreenLayout from '../../layout/ScreenLayout';
import { RootStackParamList } from '../../navigation/types';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import { Icon } from '../../ui/Icon/Icon';
import { formatVisitDateTime } from '../../utils/Visit/visitFormatters';
import { getVisitSummaryItems } from '../../utils/Visit/visitSummary';

import { styles } from './VisitDetailsScreen.style';

type Route = RouteProp<RootStackParamList, 'VisitDetails'>;

const VisitDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<Route>();
  const { appointmentId } = route.params;
  const { userProfile } = useAuth();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const { data: appointments = [], isLoading: isAppointmentsLoading } =
    useUserAppointments(userProfile?.id);
  const appointment = useMemo(
    () => appointments.find(item => item.id === appointmentId),
    [appointmentId, appointments],
  );
  const { data: visitRecord, isLoading: isVisitRecordLoading } =
    useVisitRecord(appointmentId, userProfile?.id);
  const { data: treatmentPlans = [], isLoading: isTreatmentPlansLoading } =
    useAppointmentTreatmentPlans(appointmentId, userProfile?.id);
  const { data: existingReview, isLoading: isReviewLoading } =
    useAppointmentReview(appointmentId, userProfile?.id);
  const createReview = useCreateDoctorReview();

  const summaryItems = useMemo(
    () => getVisitSummaryItems(visitRecord),
    [visitRecord],
  );

  const isLoading =
    isAppointmentsLoading ||
    isVisitRecordLoading ||
    isTreatmentPlansLoading ||
    isReviewLoading;

  const handleSubmitReview = () => {
    if (!userProfile || !appointment) {
      return;
    }

    if (rating < 1 || rating > 5) {
      Alert.alert('Rating required', 'Please choose a rating from 1 to 5.');
      return;
    }

    createReview.mutate(
      {
        appointmentId: appointment.id,
        userId: userProfile.id,
        doctorId: appointment.doctorId,
        userName: userProfile.fullName,
        rating,
        text: reviewText,
      },
      {
        onSuccess: () => {
          Alert.alert('Thank you', 'Your review has been submitted.');
        },
        onError: () => {
          Alert.alert('Error', 'Unable to submit review. Try again later.');
        },
      },
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

        <Text style={styles.title}>Visit Details</Text>
      </View>

      {isLoading ? (
        <View style={styles.center}>
          <ActivityIndicator size={36} />
        </View>
      ) : !appointment || appointment.status !== 'completed' ? (
        <View style={styles.center}>
          <Text style={styles.emptyTitle}>Visit details unavailable</Text>
          <Text style={styles.emptyText}>
            Details are available only after a completed appointment.
          </Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.appointmentCard}>
            <View style={styles.appointmentTop}>
              <Image
                source={
                  appointment.doctorImage
                    ? { uri: appointment.doctorImage }
                    : require('../../assets/images/doctor.jpg')
                }
                style={styles.doctorAvatar}
                resizeMode="cover"
              />

              <View style={styles.appointmentTextBlock}>
                <Text style={styles.doctorName} numberOfLines={1}>
                  {appointment.doctorName}
                </Text>
                <Text style={styles.mutedText} numberOfLines={2}>
                  {appointment.serviceType.join(', ')}
                </Text>
              </View>

              <View style={styles.completedBadge}>
                <Text style={styles.completedBadgeText}>Completed</Text>
              </View>
            </View>

            <View style={styles.appointmentMetaRow}>
              <View style={styles.metaIconBox}>
                <Icon
                  name="schedule"
                  size={16}
                  color={Theme.colors.icon.primary}
                />
              </View>
              <Text style={styles.appointmentMetaText}>
                {formatVisitDateTime(appointment.startTime)}
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Clinical notes</Text>

            <View style={styles.clinicalTimeline}>
              {summaryItems.map((item, index) => {
                const isTeeth = item.label === 'Teeth';
                const teeth = Array.isArray(item.value) ? item.value : [];

                return (
                  <View key={item.label} style={styles.timelineItem}>
                    <View style={styles.timelineRail}>
                      {index < summaryItems.length - 1 && (
                        <View style={styles.timelineLine} />
                      )}
                      <View style={styles.timelineDot} />
                    </View>

                    <View style={styles.timelineContent}>
                      <Text style={styles.label}>{item.label}</Text>

                      {isTeeth ? (
                        teeth.length > 0 ? (
                          <View style={styles.chipRow}>
                            {teeth.map(tooth => (
                              <View key={tooth} style={styles.toothChip}>
                                <Text style={styles.toothChipText}>{tooth}</Text>
                              </View>
                            ))}
                          </View>
                        ) : (
                          <Text style={styles.value}>
                            No tooth numbers recorded.
                          </Text>
                        )
                      ) : (
                        <Text style={styles.value}>{item.value}</Text>
                      )}
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Prescribed treatment</Text>
            {treatmentPlans.length === 0 ? (
              <Text style={styles.value}>No medication plan was prescribed.</Text>
            ) : (
              <View style={styles.treatmentTimeline}>
                {treatmentPlans.map((plan, index) => (
                  <View key={plan.id} style={styles.timelineItem}>
                    <View style={styles.timelineRail}>
                      {index < treatmentPlans.length - 1 && (
                        <View style={styles.timelineLine} />
                      )}
                      <View style={styles.timelineDot} />
                    </View>

                    <View style={styles.timelineContent}>
                      <Text style={styles.treatmentTitle}>{plan.title}</Text>
                      <Text style={styles.value}>
                        {plan.medicationName} - {plan.strength} -{' '}
                        {plan.doseAmount}
                      </Text>
                      <Text style={styles.mutedText}>
                        {plan.startDate} - {plan.endDate}
                      </Text>

                      <View style={styles.chipRow}>
                        {plan.times.map(time => (
                          <View key={`${plan.id}-${time}`} style={styles.timeChip}>
                            <Text style={styles.timeChipText}>{time}</Text>
                          </View>
                        ))}
                      </View>

                      {!!plan.instructions && (
                        <Text style={styles.instructions}>
                          {plan.instructions}
                        </Text>
                      )}
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Doctor review</Text>
            {existingReview ? (
              <View>
                <Text style={styles.stars}>
                  {'★'.repeat(existingReview.rating)}
                </Text>
                <Text style={styles.value}>
                  {existingReview.text || 'No written comment.'}
                </Text>
              </View>
            ) : (
              <View>
                <View style={styles.starRow}>
                  {[1, 2, 3, 4, 5].map(value => (
                    <TouchableOpacity
                      key={value}
                      onPress={() => setRating(value)}
                      activeOpacity={0.75}
                    >
                      <Text style={styles.star}>
                        {value <= rating ? '★' : '☆'}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <TextInput
                  value={reviewText}
                  onChangeText={setReviewText}
                  placeholder="Share your experience"
                  placeholderTextColor={Theme.colors.text.placeholder}
                  multiline
                  style={styles.reviewInput}
                />

                <CustomBtn
                  title={createReview.isPending ? 'Submitting...' : 'Submit'}
                  onPress={handleSubmitReview}
                  isLoading={createReview.isPending}
                />
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </ScreenLayout>
  );
};

export default VisitDetailsScreen;
