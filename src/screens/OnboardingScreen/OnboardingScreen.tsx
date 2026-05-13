import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import { OnboardingStep } from './onboarding.types';

type OnboardingScreenProps = {
  step: OnboardingStep;
  onButtonPress: () => void;
  activeStep: number;
  stepsCount: number;
  styles: {
    screen: StyleProp<ViewStyle>;
    hero: StyleProp<ViewStyle>;
    image: StyleProp<ImageStyle>;
    content: StyleProp<ViewStyle>;
    title: StyleProp<TextStyle>;
    description: StyleProp<TextStyle>;
    footer: StyleProp<ViewStyle>;
    pagination: StyleProp<ViewStyle>;
    dot: StyleProp<ViewStyle>;
    activeDot: StyleProp<ViewStyle>;
    button: StyleProp<ViewStyle>;
  };
};

const OnboardingScreen = ({
  step,
  onButtonPress,
  activeStep,
  stepsCount,
  styles,
}: OnboardingScreenProps) => {
  return (
    <View style={styles.screen}>
      <View style={styles.hero}>
        <Image source={step.image} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{step.title}</Text>
        <Text style={styles.description}>{step.description}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {Array.from({ length: stepsCount }).map((_, index) => (
            <View
              key={index}
              style={[styles.dot, activeStep === index && styles.activeDot]}
            />
          ))}
        </View>

        <CustomBtn
          title={step.buttonTitle}
          onPress={onButtonPress}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;
