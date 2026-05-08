import { ActivityIndicator, Alert, ScrollView, View } from 'react-native';

import {
  CommonActions,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import AppointmentDetails from '../../components/BookingConfirm/AppointmentDetails/AppointmentDetails';
import BookingDoctorCard from '../../components/BookingConfirm/BookingDoctorCard/BookingDoctorCard';
import PaymentSummary from '../../components/BookingConfirm/PaymentSummary/PaymentSummary';
import { Theme } from '../../constants/theme';
import { useCreateAppointment } from '../../hook/useCreateAppointment';
import LayoutAreaView from '../../layout/ScreenLayout';
import ScreenLayout from '../../layout/ScreenLayout';
import { BookingStackParamList, RootNav } from '../../navigation/types';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import SubTitle from '../../ui/SubTitle/SubTitle';

type Route = RouteProp<BookingStackParamList, 'BookingConfirm'>;

const MOCK_USER_ID = 'user1';

const BookingConfirmScreen = () => {
  const route = useRoute<Route>();
  const navigation = useNavigation<RootNav>();

  const { doctorData, date, time, serviceType, totalPrice, slotId } =
    route.params;

  const { mutate, isPending } = useCreateAppointment();

  const handleConfirm = () => {
    mutate(
      {
        slotId,
        userId: MOCK_USER_ID,
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
        onError: (error: any) => {
          if (error.message === 'Time slot already booked') {
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

export default BookingConfirmScreen;
