export const medicationForms = [
  { value: 'tablet', label: 'Tablet' },
  { value: 'capsule', label: 'Capsule' },
  { value: 'syrup', label: 'Syrup' },
  { value: 'suspension', label: 'Suspension' },
  { value: 'solution', label: 'Solution' },
  { value: 'rinse', label: 'Mouth rinse' },
  { value: 'gel', label: 'Gel' },
  { value: 'spray', label: 'Spray' },
] as const;

export type MedicationForm = (typeof medicationForms)[number]['value'];

export type MedicationType = {
  id: string;
  name: string;
  dose: string;
  time: string;
  taken: boolean;
  form: MedicationForm;
};

export type TreatmentPlanStatus =
  | 'active'
  | 'paused'
  | 'completed'
  | 'cancelled';

export type MedicationIntakeStatus = 'taken' | 'skipped' | 'missed';

export type TreatmentPlan = {
  id: string;
  title: string;
  diagnosis: string;
  prescribedBy: string;
  medicationName: string;
  strength: string;
  doseAmount: string;
  form: MedicationForm;
  startDate: string;
  endDate: string;
  times: string[];
  status: TreatmentPlanStatus;
  instructions?: string;
  createdAt: string;
  updatedAt: string;
};

export type MedicationIntake = {
  id: string;
  treatmentPlanId: string;
  scheduledDate: string;
  scheduledTime: string;
  scheduledAt: string;
  status: MedicationIntakeStatus;
  takenAt?: string;
  createdAt: string;
  updatedAt: string;
};

export type MedicationScheduleItem = MedicationType & {
  treatmentPlanId: string;
  scheduledDate: string;
  scheduledAt: string;
  status: 'pending' | MedicationIntakeStatus;
};
