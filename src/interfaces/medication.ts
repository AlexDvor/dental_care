export type MedicationType = {
  id: string;
  name: string;
  dose: string;
  time: string;
  taken: boolean;
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
