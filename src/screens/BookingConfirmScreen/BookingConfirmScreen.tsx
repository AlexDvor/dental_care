import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { BookingStackParamList } from '../../navigation/types';
import LayoutAreaView from '../../layout/LayoutAreaView';
import BookingDoctorCard from '../../components/BookingConfirm/BookingDoctorCard/BookingDoctorCard';

import AppointmentDetails from '../../components/BookingConfirm/AppointmentDetails/AppointmentDetails';
import PaymentSummary from '../../components/BookingConfirm/PaymentSummary/PaymentSummary';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';

type Route = RouteProp<BookingStackParamList, 'BookingConfirm'>;

const BookingConfirmScreen = () => {
  const route = useRoute<Route>();
  const { doctorData, date, time, serviceType, totalPrice } = route.params;

  return (
    <LayoutAreaView withHeader>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            title="Confirm & Pay"
            onPress={() => {}}
            iconPosition="left"
            icon="lock"
          />
        </View>
      </ScrollView>
    </LayoutAreaView>
  );
};

export default BookingConfirmScreen;
