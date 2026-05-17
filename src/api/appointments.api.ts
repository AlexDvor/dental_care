import {
  collection,
  doc,
  getDocs,
  query,
  runTransaction,
  where,
} from '@react-native-firebase/firestore';

import { COLLECTION_NAME } from '../constants/collections';
import {
  Appointment,
  CancelAppointmentPayload,
  CreateAppointmentPayload,
  MarkAppointmentCompletedPayload,
  MarkAppointmentPayload,
} from '../interfaces/appointment.types';
import { getAppointmentPolicyDates } from '../utils/Appointment/appointmentPolicy';
import { sortAppointmentsByNewest } from '../utils/Appointment/appointmentSort';
import { getDb, initializeFirebaseApp } from './firebase';

export type {
  Appointment,
  AppointmentStatus,
  CancelAppointmentPayload,
  CompletedTreatmentPlanPayload,
  CreateAppointmentPayload,
  MarkAppointmentCompletedPayload,
  MarkAppointmentPayload,
} from '../interfaces/appointment.types';

export const getUserAppointments = async (
  userId: string,
): Promise<Appointment[]> => {
  await initializeFirebaseApp();

  const db = getDb();

  try {
    const appointmentsQuery = query(
      collection(db, COLLECTION_NAME.APPOINTMENTS),
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
  const slotRef = doc(db, COLLECTION_NAME.SLOTS, slotId);
  const appointmentRef = doc(collection(db, COLLECTION_NAME.APPOINTMENTS));

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
  const appointmentRef = doc(db, COLLECTION_NAME.APPOINTMENTS, appointmentId);
  const slotRef = doc(db, COLLECTION_NAME.SLOTS, slotId);

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
  const appointmentRef = doc(db, COLLECTION_NAME.APPOINTMENTS, appointmentId);

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
  const appointmentRef = doc(db, COLLECTION_NAME.APPOINTMENTS, appointmentId);

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
        COLLECTION_NAME.VISIT_RECORDS,
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
      const treatmentPlanRef = doc(
        collection(db, COLLECTION_NAME.TREATMENT_PLANS),
      );

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
