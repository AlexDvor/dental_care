import React from 'react';
import { Text,View } from 'react-native';

import { StatProps, StatsRowProps } from './StatsRow.interface';

import { styles } from './StatsRow.style';

const Stat = ({ value, label }: StatProps) => (
  <View style={styles.card}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const StatsRow = ({ stats, experience }: StatsRowProps) => {
  return (
    <View style={styles.container}>
      <Stat value={`${stats.patients}+`} label="Happy Patients" />

      <Stat value={`${experience}+`} label="Years Experience" />

      <Stat value={`${stats.satisfaction}%`} label="Satisfaction" />
    </View>
  );
};

export default StatsRow;
