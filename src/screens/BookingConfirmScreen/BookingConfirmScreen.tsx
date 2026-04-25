import { RouteProp, useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { BookingStackParamList } from '../../navigation/types';

type Route = RouteProp<BookingStackParamList, 'BookingConfirm'>;

const BookingConfirmScreen = () => {
  const route = useRoute<Route>();
  const { doctorId, date, time } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>BookingConfirmScreen</Text>
      <Text>DoctorId{doctorId}</Text>
      <Text>Date:{date}</Text>
      <Text>Time:{time}</Text>
    </View>
  );
};

export default BookingConfirmScreen;
