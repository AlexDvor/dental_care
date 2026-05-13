import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/AuthScreen/LoginScreen/LoginScreen';
import OtpVerificationScreen from '../screens/AuthScreen/OtpVerificationScreen/OtpVerificationScreen';
import RegisterScreen from '../screens/AuthScreen/RegisterScreen/RegisterScreen';
import AppointmentOnboardingScreen from '../screens/OnboardingScreen/AppointmentOnboardingScreen/AppointmentOnboardingScreen';
import SmileCareOnboardingScreen from '../screens/OnboardingScreen/SmileCareOnboardingScreen/SmileCareOnboardingScreen';
import TabNavigator from './TabNavigator';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppointmentOnboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="AppointmentOnboarding"
          component={AppointmentOnboardingScreen}
        />
        <Stack.Screen
          name="SmileCareOnboarding"
          component={SmileCareOnboardingScreen}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerificationScreen}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
