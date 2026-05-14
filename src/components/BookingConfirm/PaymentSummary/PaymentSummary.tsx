import { Text, View } from 'react-native';

import { styles } from './PaymentSummary.styles';

interface PaymentSummaryProps {
  total: number;
}

const PaymentSummary = ({ total }: PaymentSummaryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Summary</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Total Price</Text>
        <Text style={styles.value}>${total}</Text>
      </View>

      <Text style={styles.secure}>
        Your payment information is secure and encrypted
      </Text>
    </View>
  );
};

export default PaymentSummary;
