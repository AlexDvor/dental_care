import { ViewStyle } from 'react-native';

export type MedicationReminderProps = {
  taken?: number;
  total?: number;
  nextDoseName?: string;
  nextDoseTime?: string;
  onPress?: () => void;
  style?: ViewStyle;
};
