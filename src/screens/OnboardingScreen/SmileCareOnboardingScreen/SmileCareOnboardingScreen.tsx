import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  ONBOARDING_STEPS_COUNT,
  onboardingSteps,
} from '../../../constants/onboarding.data';
import ScreenLayout from '../../../layout/ScreenLayout';
import { RootStackParamList } from '../../../navigation/types';
import OnboardingScreen from '../OnboardingScreen';

import { styles } from './SmileCareOnboardingScreen.style';

type Props = NativeStackScreenProps<RootStackParamList, 'SmileCareOnboarding'>;

const SmileCareOnboardingScreen = ({ navigation }: Props) => {
  const handleStartPress = () => {
    navigation.replace('Register');
  };

  return (
    <ScreenLayout style={styles.container} avoidBottomTabBar={false}>
      <OnboardingScreen
        step={onboardingSteps.smileCare}
        onButtonPress={handleStartPress}
        activeStep={1}
        stepsCount={ONBOARDING_STEPS_COUNT}
        styles={styles}
      />
    </ScreenLayout>
  );
};

export default SmileCareOnboardingScreen;
