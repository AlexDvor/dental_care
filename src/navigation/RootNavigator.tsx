import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Theme } from '../constants/theme';
import { useAuth } from '../hook/useAuth';
import LoginScreen from '../screens/AuthScreen/LoginScreen/LoginScreen';
import OtpVerificationScreen from '../screens/AuthScreen/OtpVerificationScreen/OtpVerificationScreen';
import RegisterScreen from '../screens/AuthScreen/RegisterScreen/RegisterScreen';
import AppointmentOnboardingScreen from '../screens/OnboardingScreen/AppointmentOnboardingScreen/AppointmentOnboardingScreen';
import SmileCareOnboardingScreen from '../screens/OnboardingScreen/SmileCareOnboardingScreen/SmileCareOnboardingScreen';
import VisitDetailsScreen from '../screens/VisitDetailsScreen/VisitDetailsScreen';
import VisitHistoryScreen from '../screens/VisitHistoryScreen/VisitHistoryScreen';
import TabNavigator from './TabNavigator';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { isAuthenticated, isInitializing } = useAuth();

  if (isInitializing) {
    return (
      <View
        style={styles.loadingContainer}
      >
        <ActivityIndicator color={Theme.colors.background.accent} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        {isAuthenticated ? (
          <>
            <Stack.Screen name="MainTabs" component={TabNavigator} />
            <Stack.Screen name="VisitHistory" component={VisitHistoryScreen} />
            <Stack.Screen name="VisitDetails" component={VisitDetailsScreen} />
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: 'center',
    backgroundColor: Theme.colors.background.main,
    flex: 1,
    justifyContent: 'center',
  },
});
