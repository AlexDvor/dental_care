import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { BookingStackParamList } from '../../navigation/types';

type Route = RouteProp<BookingStackParamList, 'DoctorProfile'>;

const DoctorProfileScreen = () => {
  const route = useRoute<Route>();
  const { doctorId } = route.params;
  console.log('🚀 ~ doctorId:', doctorId);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DoctorProfileScreen</Text>
      <Text>Doctor Id {doctorId}</Text>
    </View>
  );
};

export default DoctorProfileScreen;
