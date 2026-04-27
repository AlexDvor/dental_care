import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './AboutSection.style';
import { AboutSectionProps } from './AboutSection.interface';

const AboutSection = ({ about }: AboutSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Doctor</Text>
      <Text style={styles.text}>{about}</Text>
    </View>
  );
};

export default AboutSection;
