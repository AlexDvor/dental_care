import {
  collection,
  doc,
  getDocs,
  query,
  runTransaction,
  where,
} from '@react-native-firebase/firestore';

import { MedicationForm } from '../interfaces/medication';
import { getDb, initializeFirebaseApp } from './firebase';
import { VisitRecordPayload } from './visitRecords.api';

const APPOINTMENTS_COLLECTION = 'appointments';
const SLOTS_COLLECTION = 'slots';
const VISIT_RECORDS_COLLECTION = 'visitRecords';
const TREATMENT_PLANS_COLLECTION = 'treatmentPlans';
const DAY_IN_MS = 24 * 60 * 60 * 1000;
const HOUR_IN_MS = 60 * 60 * 1000;

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

export const getAppointmentPolicyDates = (startTime: number) => ({
  refundEligibleUntil: startTime - 7 * DAY_IN_MS,
  cancelAllowedUntil: startTime - 48 * HOUR_IN_MS,
});

export const sortAppointmentsByNewest = (
  appointments: Appointment[],
): Appointment[] =>
  [...appointments].sort((a, b) => b.startTime - a.startTime);

export const getNextUpcomingAppointment = (
  appointments: Appointment[],
  now = Date.now(),
): Appointment | null =>
  appointments
    .filter(appointment => appointment.status === 'upcoming')
    .filter(appointment => appointment.startTime >= now)
    .sort((a, b) => a.startTime - b.startTime)[0] ?? null;

export const getUserAppointments = async (
  userId: string,
): Promise<Appointment[]> => {
  await initializeFirebaseApp();

  const db = getDb();

  try {
    const appointmentsQuery = query(
      collection(db, APPOINTMENTS_COLLECTION),
      where('userId', '==', userId),
    );
    const snapshot = await getDocs(appointmentsQuery);

    const appointments = snapshot.docs.map(docSnapshot => ({
      id: docSnapshot.id,
      ...(docSnapshot.data() as Omit<Appointment, 'id'>),
    }));

    return sortAppointmentsByNewest(appointments);
  } catch (error) {
    console.error('getUserAppointments error:', error);
    throw error;
  }
};

export const createAppointment = async ({
  slotId,
  userId,
  doctorId,
  doctorName,
  doctorImage,
  serviceType,
  totalPrice,
}: CreateAppointmentPayload) => {
  await initializeFirebaseApp();

  const db = getDb();
  const slotRef = doc(db, SLOTS_COLLECTION, slotId);
  const appointmentRef = doc(collection(db, APPOINTMENTS_COLLECTION));

  await runTransaction(db, async transaction => {
    const snapshot = await transaction.get(slotRef);

    if (!snapshot.exists()) {
      throw new Error('Slot not found');
    }

    const data = snapshot.data();

    if (data?.isBooked) {
      throw new Error('Time slot already booked');
    }

    if (data?.doctorId && data.doctorId !== doctorId) {
      throw new Error('Slot not found');
    }

    if (
      typeof data?.startTime !== 'number' ||
      typeof data?.endTime !== 'number'
    ) {
      throw new Error('Slot not found');
    }

    const now = Date.now();

    if (data.startTime <= now) {
      throw new Error('Slot not found');
    }

    const { cancelAllowedUntil, refundEligibleUntil } =
      getAppointmentPolicyDates(data.startTime);

    transaction.update(slotRef, {
      isBooked: true,
      bookedBy: userId,
    });

    transaction.set(appointmentRef, {
      userId,
      doctorId,
      slotId,
      doctorName,
      doctorImage,
      serviceType,
      totalPrice,
      startTime: data?.startTime,
      endTime: data?.endTime,
      status: 'upcoming',
      cancelAllowedUntil,
      refundEligibleUntil,
      missedNonRefundable: true,
      createdAt: now,
      updatedAt: now,
    });
  });

  return { id: appointmentRef.id, success: true };
};

export const cancelAppointment = async ({
  appointmentId,
  slotId,
  userId,
}: CancelAppointmentPayload) => {
  await initializeFirebaseApp();

  const db = getDb();
  const appointmentRef = doc(db, APPOINTMENTS_COLLECTION, appointmentId);
  const slotRef = doc(db, SLOTS_COLLECTION, slotId);

  try {
    await runTransaction(db, async transaction => {
      const appointmentSnapshot = await transaction.get(appointmentRef);
      const slotSnapshot = await transaction.get(slotRef);

      if (!appointmentSnapshot.exists()) {
        throw new Error('Appointment not found');
      }

      const appointment = appointmentSnapshot.data() as Appointment;

      if (appointment.status !== 'upcoming') {
        throw new Error('Appointment cannot be cancelled');
      }

      if (appointment.userId !== userId) {
        throw new Error('Appointment not found');
      }

      if (appointment.slotId !== slotId) {
        throw new Error('Appointment slot mismatch');
      }

      if (!slotSnapshot.exists()) {
        throw new Error('Slot not found');
      }

      const cancelAllowedUntil =
        appointment.cancelAllowedUntil ??
        getAppointmentPolicyDates(appointment.startTime).cancelAllowedUntil;

      if (Date.now() > cancelAllowedUntil) {
        throw new Error('Cancellation period expired');
      }

      transaction.update(appointmentRef, {
        status: 'cancelled',
        cancelledAt: Date.now(),
        cancelledBy: 'patient',
        updatedAt: Date.now(),
      });

      transaction.update(slotRef, {
        isBooked: false,
        bookedBy: null,
      });
    });
  } catch (error) {
    if (
      error instanceof Error &&
      (error.message === 'Appointment not found' ||
        error.message === 'Slot not found' ||
        error.message === 'Appointment cannot be cancelled' ||
        error.message === 'Appointment slot mismatch' ||
        error.message === 'Cancellation period expired')
    ) {
      throw error;
    }

    throw new Error('Unable to cancel appointment');
  }

  return { success: true };
};

export const markAppointmentMissed = async ({
  appointmentId,
  actorId,
}: MarkAppointmentPayload) => {
  await initializeFirebaseApp();

  const db = getDb();
  const appointmentRef = doc(db, APPOINTMENTS_COLLECTION, appointmentId);

  await runTransaction(db, async transaction => {
    const appointmentSnapshot = await transaction.get(appointmentRef);

    if (!appointmentSnapshot.exists()) {
      throw new Error('Appointment not found');
    }

    transaction.update(appointmentRef, {
      status: 'missed',
      missedMarkedAt: Date.now(),
      missedMarkedBy: actorId,
      updatedAt: Date.now(),
    });
  });

  return { success: true };
};

export const markAppointmentCompleted = async ({
  appointmentId,
  actorId,
  visitRecord,
  treatmentPlans = [],
}: MarkAppointmentCompletedPayload) => {
  await initializeFirebaseApp();

  const db = getDb();
  const appointmentRef = doc(db, APPOINTMENTS_COLLECTION, appointmentId);

  await runTransaction(db, async transaction => {
    const appointmentSnapshot = await transaction.get(appointmentRef);

    if (!appointmentSnapshot.exists()) {
      throw new Error('Appointment not found');
    }

    const appointment = appointmentSnapshot.data() as Appointment;
    const now = Date.now();
    const nowIso = new Date(now).toISOString();

    transaction.update(appointmentRef, {
      status: 'completed',
      completedAt: now,
      completedBy: actorId,
      updatedAt: now,
    });

    if (visitRecord) {
      const visitRecordRef = doc(
        db,
        VISIT_RECORDS_COLLECTION,
        appointmentId,
      );

      transaction.set(visitRecordRef, {
        ...visitRecord,
        appointmentId,
        userId: appointment.userId,
        doctorId: appointment.doctorId,
        createdBy: actorId,
        createdAt: now,
        updatedAt: now,
      });
    }

    treatmentPlans.forEach(plan => {
      const treatmentPlanRef = doc(collection(db, TREATMENT_PLANS_COLLECTION));

      transaction.set(treatmentPlanRef, {
        ...plan,
        appointmentId,
        userId: appointment.userId,
        doctorId: appointment.doctorId,
        status: 'active',
        createdAt: nowIso,
        updatedAt: nowIso,
      });
    });
  });

  return { success: true };
};
