import { MedicationForm } from './medication';
import { VisitRecordPayload } from './visit.types';

export type AppointmentStatus =
  | 'upcoming'
  | 'completed'
  | 'cancelled'
  | 'missed';

export type Appointment = {
  id: string;
  userId: string;
  doctorId: string;
  slotId: string;
  doctorName: string;
  doctorImage?: string;
  serviceType: string[];
  totalPrice: number;
  startTime: number;
  endTime: number;
  status: AppointmentStatus;
  cancelAllowedUntil: number;
  refundEligibleUntil: number;
  missedNonRefundable: boolean;
  cancelledAt?: number;
  cancelledBy?: 'patient' | 'clinic';
  missedMarkedAt?: number;
  missedMarkedBy?: string;
  completedAt?: number;
  completedBy?: string;
  createdAt: number;
  updatedAt: number;
};

export type CreateAppointmentPayload = {
  slotId: string;
  userId: string;
  doctorId: string;
  doctorName: string;
  doctorImage?: string;
  serviceType: string[];
  totalPrice: number;
};

export type CancelAppointmentPayload = {
  appointmentId: string;
  slotId: string;
  userId: string;
};

export type MarkAppointmentPayload = {
  appointmentId: string;
  actorId: string;
};

export type CompletedTreatmentPlanPayload = {
  appointmentId: string;
  userId: string;
  doctorId: string;
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
  instructions?: string;
};

export type MarkAppointmentCompletedPayload = MarkAppointmentPayload & {
  visitRecord?: Omit<VisitRecordPayload, 'appointmentId' | 'createdBy'>;
  treatmentPlans?: Array<
    Omit<CompletedTreatmentPlanPayload, 'appointmentId' | 'userId' | 'doctorId'>
  >;
};
