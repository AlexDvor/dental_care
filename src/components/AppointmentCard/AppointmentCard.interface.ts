import { StyleProp, ViewStyle } from 'react-native';

export interface AppointmentCardProps {
  doctorName: string;
  serviceType: string[];
  dateLabel: string;
  timeLabel: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
