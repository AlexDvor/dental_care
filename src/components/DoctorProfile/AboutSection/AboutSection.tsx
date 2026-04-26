import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './AboutSection.style';

const AboutSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Doctor</Text>
      <Text style={styles.text}>
        Dedicated orthodontist with a passion for creating healthy, confident
        smiles using modern technologies.
      </Text>
    </View>
  );
};

export default AboutSection;
