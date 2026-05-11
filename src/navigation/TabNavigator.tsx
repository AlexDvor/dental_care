import { View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Theme } from '../constants/theme';
import { Icon, IconNameType } from '../ui/Icon/Icon';
import BookingStack from './Stack/BookingStack';
import ChatStack from './Stack/ChatStack';
import HomeStack from './Stack/HomeStack';
import ProfileStack from './Stack/ProfileStack';
import { TabParamList } from './types';

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
        backgroundColor: focused
          ? Theme.colors.tabNavigation.tabActiveBackgroundColor
          : 'transparent',
        padding: 8,
        borderRadius: 12,
      }}
    >
      <Icon
        name={iconName}
        size={22}
        color={Theme.colors.tabNavigation.iconColor}
      />
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
        tabBarActiveTintColor: Theme.colors.tabNavigation.tabBarActiveTintColor,
        tabBarInactiveTintColor:
          Theme.colors.tabNavigation.tabBarActiveTintColor,

        tabBarStyle: {
          height: 78,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: Theme.colors.tabNavigation.tabBackgroundColor,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ({ color, focused }) =>
          renderTabIcon(route.name, color, focused),

        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 5,
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
