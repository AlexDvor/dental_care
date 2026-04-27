import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Theme } from '../../constants/colors';
import BookingConfirmScreen from '../../screens/BookingConfirmScreen/BookingConfirmScreen';
import DoctorListScreen from '../../screens/DoctorListScreen/DoctorListScreen';
import DoctorProfileScreen from '../../screens/DoctorProfileScreen/DoctorProfileScreen';
import SelectDateScreen from '../../screens/SelectDateScreen/SelectDateScreen';
import ServiceScreen from '../../screens/ServiceScreen/ServiceScreen';
import { BookingStackParamList } from '../types';

const Stack = createNativeStackNavigator<BookingStackParamList>();

export default function BookingStack() {
  return (
    <Stack.Navigator
      initialRouteName="ServiceList"
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="ServiceList"
        component={ServiceScreen}
        options={{
          title: 'Choose Service',
          headerStyle: { backgroundColor: Theme.colors.background.soft },
        }}
      />
      <Stack.Screen
        name="DoctorList"
        component={DoctorListScreen}
        options={{
          title: 'Choose Doctor',
          headerStyle: { backgroundColor: Theme.colors.background.soft },
        }}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfileScreen}
        options={{
          title: 'Profile Details',
          headerStyle: { backgroundColor: Theme.colors.background.soft },
        }}
      />
      <Stack.Screen
        name="SelectDate"
        component={SelectDateScreen}
        options={{
          title: 'Select Date',
          headerStyle: { backgroundColor: Theme.colors.background.soft },
        }}
      />
      <Stack.Screen
        name="BookingConfirm"
        component={BookingConfirmScreen}
        options={{
          title: 'Booking Confirm',
          headerStyle: { backgroundColor: Theme.colors.background.soft },
        }}
      />
    </Stack.Navigator>
  );
}
