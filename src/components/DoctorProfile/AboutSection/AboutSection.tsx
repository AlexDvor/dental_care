import React from 'react';
import { Text,View } from 'react-native';

import { AboutSectionProps } from './AboutSection.interface';

import { styles } from './AboutSection.style';

const AboutSection = ({ about }: AboutSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Doctor</Text>
      <Text style={styles.text}>{about}</Text>
    </View>
  );
};

export default AboutSection;
