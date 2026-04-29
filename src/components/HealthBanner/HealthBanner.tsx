import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Theme } from '../../constants/colors';

const HealthBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keep your smile healthy</Text>
      <Text style={styles.desc}>
        Regular checkups help prevent problems before they start.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Explore Services →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HealthBanner;

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,
    padding: Theme.spacing.lg,
    borderRadius: Theme.radius.md,
    backgroundColor: '#E8F3ED',
  },

  title: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },

  desc: {
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.secondary,
    marginTop: 6,
    marginBottom: 12,
  },

  button: {
    backgroundColor: Theme.colors.primary.main,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: Theme.radius.md,
    alignSelf: 'flex-start',
  },

  buttonText: {
    color: Theme.colors.base.white,
    fontWeight: Theme.typography.fontWeight.medium,
  },
});
