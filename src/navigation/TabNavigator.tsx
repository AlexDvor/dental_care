// navigation/TabNavigator.tsx

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './Stack/HomeStack';
import ProfileStack from './Stack/ProfileStack';
import ChatStack from './Stack/ChatStack';
import BookingStack from './Stack/BookingStack';
import { TabParamList } from './types';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeTab"
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="BookingTab"
        component={BookingStack}
        options={{ title: 'Bookings' }}
      />
      <Tab.Screen
        name="ChatTab"
        component={ChatStack}
        options={{ title: 'Chat' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
