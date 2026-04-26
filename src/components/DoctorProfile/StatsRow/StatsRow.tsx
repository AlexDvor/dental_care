import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './StatsRow.style';

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
