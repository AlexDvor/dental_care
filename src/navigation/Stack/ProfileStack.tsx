import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Theme } from '../../constants/theme';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import VisitDetailsScreen from '../../screens/VisitDetailsScreen/VisitDetailsScreen';
import VisitHistoryScreen from '../../screens/VisitHistoryScreen/VisitHistoryScreen';
import { ProfileStackParamList } from '../types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{
          headerStyle: { backgroundColor: Theme.colors.background.accent },
          headerTitle: 'Profile',
          headerTitleStyle: { color: Theme.colors.text.inverted },
        }}
      />
      <Stack.Screen
        name="VisitHistory"
        component={VisitHistoryScreen}
        options={{
          headerStyle: { backgroundColor: Theme.colors.background.accent },
          headerTitle: 'Visit History',
          headerTitleStyle: { color: Theme.colors.text.inverted },
        }}
      />
      <Stack.Screen
        name="VisitDetails"
        component={VisitDetailsScreen}
        options={{
          headerStyle: { backgroundColor: Theme.colors.background.accent },
          headerTitle: 'Visit Details',
          headerTitleStyle: { color: Theme.colors.text.inverted },
        }}
      />
    </Stack.Navigator>
  );
}
