import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  ONBOARDING_STEPS_COUNT,
  onboardingSteps,
} from '../../../constants/onboarding.data';
import { Theme } from '../../../constants/theme';
import ScreenLayout from '../../../layout/ScreenLayout';
import { RootStackParamList } from '../../../navigation/types';
import OnboardingScreen from '../OnboardingScreen';

import { styles } from './AppointmentOnboardingScreen.style';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'AppointmentOnboarding'
>;

const AppointmentOnboardingScreen = ({ navigation }: Props) => {
  const handleNextPress = () => {
    navigation.navigate('SmileCareOnboarding');
  };

  return (
    <ScreenLayout
      style={styles.container}
      avoidBottomTabBar={false}
      statusBarBackgroundColor={Theme.colors.statusBar.primary}
      statusBarStyle="dark-content"
    >
      <OnboardingScreen
        step={onboardingSteps.appointment}
        onButtonPress={handleNextPress}
        activeStep={0}
        stepsCount={ONBOARDING_STEPS_COUNT}
        styles={styles}
      />
    </ScreenLayout>
  );
};

export default AppointmentOnboardingScreen;
