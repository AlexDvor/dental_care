import { ViewStyle } from 'react-native';

import { MedicationType } from '../../interfaces/medication';

export type MedicationReminderDose = Pick<
  MedicationType,
  'name' | 'dose' | 'time' | 'form'
>;

export type MedicationReminderProps = {
  hasActiveTreatmentPlan?: boolean;
  taken?: number;
  total?: number;
  nextDose?: MedicationReminderDose;
  onPress?: () => void;
  style?: ViewStyle;
};
