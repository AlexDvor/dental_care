import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../../constants/colors';

const Stat = ({ value, label }: any) => (
  <View style={styles.card}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const StatsRow = () => {
  return (
    <View style={styles.container}>
      <Stat value="120+" label="Happy Patients" />
      <Stat value="7+" label="Years Experience" />
      <Stat value="98%" label="Satisfaction" />
    </View>
  );
};

export default StatsRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
    marginTop: Theme.spacing.lg,
  },
  card: {
    flex: 1,
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: Theme.typography.size.h3,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.primary.main,
    textAlign: 'center',
  },
  label: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.caption,
    textAlign: 'center',
  },
});
