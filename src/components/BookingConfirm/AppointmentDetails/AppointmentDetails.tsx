import { Text, View } from 'react-native';

import DetailRow from '../DetailRow/DetailRow';

import { styles } from './AppointmentDetails.style';

interface AppointmentDetailsProps {
  date: string;
  time: string;
  service: string;
  price: number;
}

const AppointmentDetails = ({
  date,
  time,
  service,
  price,
}: AppointmentDetailsProps) => {
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
