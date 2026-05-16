import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
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

import { styles } from './VisitDetailsScreen.style';

type Route = RouteProp<RootStackParamList, 'VisitDetails'>;

const formatDateTime = (timestamp: number) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(timestamp));

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
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{appointment.doctorName}</Text>
            <Text style={styles.mutedText}>
              {formatDateTime(appointment.startTime)}
            </Text>
            <Text style={styles.mutedText}>
              {appointment.serviceType.join(', ')}
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Treatment summary</Text>
            <Text style={styles.label}>Diagnosis</Text>
            <Text style={styles.value}>
              {visitRecord?.diagnosis || 'No diagnosis recorded yet.'}
            </Text>

            <Text style={styles.label}>Procedures</Text>
            <Text style={styles.value}>
              {visitRecord?.procedures?.join(', ') ||
                'No procedures recorded yet.'}
            </Text>

            <Text style={styles.label}>Teeth</Text>
            <Text style={styles.value}>
              {visitRecord?.toothNumbers?.join(', ') ||
                'No tooth numbers recorded.'}
            </Text>

            <Text style={styles.label}>Doctor notes</Text>
            <Text style={styles.value}>
              {visitRecord?.notes || 'No notes recorded yet.'}
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Prescribed treatment</Text>
            {treatmentPlans.length === 0 ? (
              <Text style={styles.value}>No medication plan was prescribed.</Text>
            ) : (
              treatmentPlans.map(plan => (
                <View key={plan.id} style={styles.treatmentItem}>
                  <Text style={styles.treatmentTitle}>{plan.title}</Text>
                  <Text style={styles.value}>
                    {plan.medicationName} - {plan.strength} -{' '}
                    {plan.doseAmount}
                  </Text>
                  <Text style={styles.mutedText}>
                    {plan.startDate} - {plan.endDate} at {plan.times.join(', ')}
                  </Text>
                  {!!plan.instructions && (
                    <Text style={styles.value}>{plan.instructions}</Text>
                  )}
                </View>
              ))
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
                  multiline
                  style={styles.reviewInput}
                />

                <CustomBtn
                  title={createReview.isPending ? 'Submitting...' : 'Submit'}
                  onPress={handleSubmitReview}
                  isDisabled={createReview.isPending}
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
