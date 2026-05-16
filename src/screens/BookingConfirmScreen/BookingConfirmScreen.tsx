import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  CommonActions,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { getAppointmentPolicyDates } from '../../api/appointments.api';
import AppointmentDetails from '../../components/BookingConfirm/AppointmentDetails/AppointmentDetails';
import BookingDoctorCard from '../../components/BookingConfirm/BookingDoctorCard/BookingDoctorCard';
import PaymentSummary from '../../components/BookingConfirm/PaymentSummary/PaymentSummary';
import { Theme } from '../../constants/theme';
import { useAuth } from '../../hook/useAuth';
import { useCreateAppointment } from '../../hook/useCreateAppointment';
import ScreenLayout from '../../layout/ScreenLayout';
import { BookingStackParamList, RootNav } from '../../navigation/types';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import SubTitle from '../../ui/SubTitle/SubTitle';
import { formatPolicyDate } from '../../utils/Date/formatPolicyDate';

type Route = RouteProp<BookingStackParamList, 'BookingConfirm'>;

const BookingConfirmScreen = () => {
  const route = useRoute<Route>();
  const navigation = useNavigation<RootNav>();
  const { userProfile } = useAuth();

  const { doctorData, date, time, serviceType, totalPrice, slotId, startTime } =
    route.params;

  const { cancelAllowedUntil, refundEligibleUntil } =
    getAppointmentPolicyDates(startTime);

  const { mutate, isPending } = useCreateAppointment();

  const handleConfirm = () => {
    if (!userProfile) {
      Alert.alert('Login required', 'Please log in before booking a visit.');
      return;
    }

    mutate(
      {
        slotId,
        userId: userProfile.id,
        doctorId: doctorData.id,
        doctorName: doctorData.name,
        doctorImage: doctorData.image,
        serviceType,
        totalPrice,
      },
      {
        onSuccess: () => {
          Alert.alert('Success', 'Appointment booked successfully', [
            {
              text: 'OK',
              onPress: () => {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'HomeTab' }],
                  }),
                );
              },
            },
          ]);
        },
        onError: error => {
          if (
            error instanceof Error &&
            error.message === 'Time slot already booked'
          ) {
            Alert.alert(
              'Slot unavailable',
              'This time slot was just booked. Please choose another one.',
            );
          } else {
            Alert.alert('Error', 'Something went wrong. Try again.');
          }
        },
      },
    );
  };

  return (
    <ScreenLayout
      defaultPadding
      statusBarBackgroundColor={Theme.colors.statusBar.primary}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <SubTitle title="Check and confirm appointment" />

        <BookingDoctorCard doctor={doctorData} />

        <AppointmentDetails
          date={date}
          time={time}
          service={serviceType.join(', ')}
          price={totalPrice}
        />

        <PaymentSummary total={totalPrice} />

        <View style={styles.policyCard}>
          <Text style={styles.policyTitle}>Cancellation policy</Text>

          <Text style={styles.policyText}>
            Free cancellation is available until{' '}
            {formatPolicyDate(cancelAllowedUntil)}.
          </Text>

          <Text style={styles.policyText}>
            Refund eligibility is available until{' '}
            {formatPolicyDate(refundEligibleUntil)}.
          </Text>

          <Text style={styles.policyText}>
            Missed appointments may be non-refundable according to clinic
            policy.
          </Text>
        </View>

        <View>
          <CustomBtn
            style={{ marginTop: 60 }}
            title={isPending ? 'Processing...' : 'Confirm & Pay'}
            onPress={handleConfirm}
            iconPosition="left"
            icon="lock"
            isDisabled={isPending}
          />

          {isPending && (
            <View style={{ marginTop: 12 }}>
              <ActivityIndicator />
            </View>
          )}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  policyCard: {
    marginTop: Theme.spacing.lg,
    padding: Theme.spacing.lg,
    borderRadius: Theme.radius.lg,
    backgroundColor: Theme.colors.background.card,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
  },

  policyTitle: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.body,
    lineHeight: Theme.typography.lineHeight.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    marginBottom: Theme.spacing.sm,
  },

  policyText: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    marginTop: Theme.spacing.xs,
  },
});

export default BookingConfirmScreen;
