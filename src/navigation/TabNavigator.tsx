import { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TAB_BAR } from '../constants/tabBar';
import { Theme } from '../constants/theme';
import { Icon, IconNameType } from '../ui/Icon/Icon';
import BookingStack from './Stack/BookingStack';
import ChatStack from './Stack/ChatStack';
import HomeStack from './Stack/HomeStack';
import ProfileStack from './Stack/ProfileStack';
import { TabParamList } from './types';

const Tab = createBottomTabNavigator<TabParamList>();

type TabIconProps = {
  routeName: string;
  color: string;
  focused: boolean;
};

type TabBarIconRenderProps = {
  color: string;
  focused: boolean;
};

function getTabIconName(routeName: string): IconNameType {
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

  return iconName;
}

function TabIcon({ routeName, color, focused }: TabIconProps) {
  const progress = useSharedValue(focused ? 1 : 0);
  const iconName = getTabIconName(routeName);
  const iconColor = focused
    ? Theme.colors.tabNavigation.iconActiveColor
    : color;

  useEffect(() => {
    progress.value = withSpring(focused ? 1 : 0, {
      damping: 16,
      stiffness: 180,
      mass: 0.7,
    });
  }, [focused, progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: 1 + progress.value * 0.08 },
      { translateY: -progress.value * 2 },
    ],
  }));

  return (
    <Animated.View
      style={[
        styles.iconContainer,
        focused && styles.iconContainerFocused,
        animatedStyle,
      ]}
    >
      <Icon name={iconName} size={21} color={iconColor} />
    </Animated.View>
  );
}

const renderHomeTabIcon = ({ color, focused }: TabBarIconRenderProps) => (
  <TabIcon routeName="HomeTab" color={color} focused={focused} />
);

const renderBookingTabIcon = ({ color, focused }: TabBarIconRenderProps) => (
  <TabIcon routeName="BookingTab" color={color} focused={focused} />
);

const renderChatTabIcon = ({ color, focused }: TabBarIconRenderProps) => (
  <TabIcon routeName="ChatTab" color={color} focused={focused} />
);

const renderProfileTabIcon = ({ color, focused }: TabBarIconRenderProps) => (
  <TabIcon routeName="ProfileTab" color={color} focused={focused} />
);

const getScreenOptions = () => ({
  headerShown: false,
  tabBarShowLabel: true,
  tabBarActiveTintColor: Theme.colors.tabNavigation.tabBarActiveTintColor,
  tabBarInactiveTintColor: Theme.colors.tabNavigation.tabBarInactiveTintColor,

  tabBarStyle: {
    position: 'absolute' as const,
    bottom: TAB_BAR.bottomOffset,
    height: TAB_BAR.height,
    paddingTop: 7,
    paddingBottom: Platform.OS === 'ios' ? 10 : 8,
    backgroundColor: Theme.colors.tabNavigation.tabBackgroundColor,
    borderTopWidth: 0,
    borderRadius: 26,

    ...Theme.shadow.large,
  },
  tabBarItemStyle: styles.tabBarItem,

  tabBarLabelStyle: {
    fontSize: 10,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: 12,
    marginTop: 0,
  },
});

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={getScreenOptions()}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: renderHomeTabIcon,
        }}
      />
      <Tab.Screen
        name="BookingTab"
        component={BookingStack}
        options={{
          title: 'Bookings',
          tabBarIcon: renderBookingTabIcon,
        }}
      />
      <Tab.Screen
        name="ChatTab"
        component={ChatStack}
        options={{
          title: 'Chat',
          tabBarIcon: renderChatTabIcon,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          title: 'Profile',
          tabBarIcon: renderProfileTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 32,
    borderRadius: 16,
  },
  iconContainerFocused: {
    backgroundColor: Theme.colors.tabNavigation.tabActiveBackgroundColor,
  },
});
