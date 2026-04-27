import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../../constants/colors';
import DetailRow from '../DetailRow/DetailRow';

const AppointmentDetails = ({ date, time, service, price }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Details</Text>

      <View style={styles.card}>
        <DetailRow label="Date" value={date} icon="schedule" />

        <DetailRow label="Time" value={time} icon="time" />

        <DetailRow label="Service" value={service} icon="service" />

        <DetailRow label="Price" value={`$${price}`} icon="price" isLast />
      </View>
    </View>
  );
};

export default AppointmentDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,
  },

  title: {
    fontWeight: Theme.typography.fontWeight.semibold,
    marginBottom: Theme.spacing.md,
  },
  card: {
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,
    paddingHorizontal: Theme.spacing.lg,
  },
});
