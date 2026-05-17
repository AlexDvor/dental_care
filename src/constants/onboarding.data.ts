import { OnboardingStep } from '../screens/OnboardingScreen/onboarding.types';

export const onboardingSteps = {
  appointment: {
    title: 'Your dental care is always close',
    description:
      'Book appointments, review upcoming visits, and get helpful reminders without calling the clinic.',
    buttonTitle: 'Next',
    image: require('../assets/images/onboarding/appointment.png'),
  },
  smileCare: {
    title: 'Take care of your healthy smile',
    description:
      'Keep your treatment history, doctor recommendations, and preventive checkups in one calm place.',
    buttonTitle: 'Get started',
    image: require('../assets/images/onboarding/smile-care.png'),
  },
} satisfies Record<string, OnboardingStep>;

export const ONBOARDING_STEPS_COUNT = Object.keys(onboardingSteps).length;
