import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../../constants/colors';

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

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.xxxl + Theme.spacing.md,
  },
  title: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
    marginBottom: Theme.spacing.sm,
  },
  text: {
    color: Theme.colors.text.secondary,
    lineHeight: Theme.typography.lineHeight.body,
  },
});
