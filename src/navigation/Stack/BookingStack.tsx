import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoctorListScreen from '../../screens/DoctorListScreen/DoctorListScreen';
import { BookingStackParamList } from '../types';

const Stack = createNativeStackNavigator<BookingStackParamList>();

export default function BookingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookingMain" component={DoctorListScreen} />
    </Stack.Navigator>
  );
}
