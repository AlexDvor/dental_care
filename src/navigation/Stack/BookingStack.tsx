import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingStackParamList } from '../types';
import DoctorListScreen from '../../screens/DoctorListScreen/DoctorListScreen';
import DoctorProfileScreen from '../../screens/DoctorProfileScreen/DoctorProfileScreen';
import SelectDateScreen from '../../screens/SelectDateScreen/SelectDateScreen';
import BookingConfirmScreen from '../../screens/BookingConfirmScreen/BookingConfirmScreen';
import ServiceScreen from '../../screens/ServiceScreen/ServiceScreen';

const Stack = createNativeStackNavigator<BookingStackParamList>();

export default function BookingStack() {
  return (
    <Stack.Navigator initialRouteName="ServiceList">
      <Stack.Screen name="ServiceList" component={ServiceScreen} />
      <Stack.Screen name="DoctorList" component={DoctorListScreen} />
      <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
      <Stack.Screen name="SelectDate" component={SelectDateScreen} />
      <Stack.Screen name="BookingConfirm" component={BookingConfirmScreen} />
    </Stack.Navigator>
  );
}
