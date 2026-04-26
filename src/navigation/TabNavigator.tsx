import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, IconNameType } from '../ui/Icon/Icon';
import BookingStack from './Stack/BookingStack';
import ChatStack from './Stack/ChatStack';
import HomeStack from './Stack/HomeStack';
import ProfileStack from './Stack/ProfileStack';
import { TabParamList } from './types';

import { View } from 'react-native';

const Tab = createBottomTabNavigator<TabParamList>();

function renderTabIcon(routeName: string, color: string, focused: boolean) {
  let iconName: IconNameType;

  if (routeName === 'HomeTab') {
    iconName = 'home';
  } else if (routeName === 'BookingTab') {
    iconName = 'schedule';
  } else if (routeName === 'ChatTab') {
    iconName = 'chat';
  } else {
    iconName = 'profile';
  }

  return (
    <View
      style={{
        backgroundColor: focused ? '#0D7A4E20' : 'transparent',
        padding: 8,
        borderRadius: 12,
      }}
    >
      <Icon name={iconName} size={22} color={color} />
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarShowLabel: true,
        tabBarActiveTintColor: '#0D7A4E',
        tabBarInactiveTintColor: '#9CA3AF',

        tabBarStyle: {
          height: 80,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ({ color, focused }) =>
          renderTabIcon(route.name, color, focused),

        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 2,
        },
      })}
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
