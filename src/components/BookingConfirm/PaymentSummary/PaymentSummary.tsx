import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../../constants/colors';

const PaymentSummary = ({ total }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Summary</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Total Price</Text>
        <Text style={styles.value}>${total}</Text>
      </View>

      <Text style={styles.secure}>
        🔒 Your payment information is secure and encrypted
      </Text>
    </View>
  );
};

export default PaymentSummary;

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,
    paddingHorizontal: Theme.spacing.lg,
  },
  title: {
    fontWeight: Theme.typography.fontWeight.semibold,
    marginBottom: Theme.spacing.md,
  },

  card: {
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: Theme.colors.primary.main,
    fontWeight: Theme.typography.fontWeight.semibold,
    fontSize: Theme.typography.size.body,
  },
  value: {
    color: Theme.colors.primary.main,
    fontWeight: Theme.typography.fontWeight.semibold,
    fontSize: Theme.typography.size.h2,
  },
  secure: {
    marginTop: Theme.spacing.md,
    textAlign: 'center',
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.caption,
  },
});
