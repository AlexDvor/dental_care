import { ImageSourcePropType } from 'react-native';

export type OnboardingStep = {
  title: string;
  description: string;
  buttonTitle: string;
  image: ImageSourcePropType;
};

