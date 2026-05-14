import {
  collection,
  doc,
  getDocs,
  query,
  runTransaction,
  where,
} from '@react-native-firebase/firestore';

import { getDb, initializeFirebaseApp } from './firebase';

const APPOINTMENTS_COLLECTION = 'appointments';
const SLOTS_COLLECTION = 'slots';

export type AppointmentStatus = 'upcoming' | 'completed' | 'cancelled';

export type Appointment = {
  id: string;
  userId: string;
  doctorId: string;
  slotId: string;
  doctorName: string;
  serviceType: string[];
  totalPrice: number;
  startTime: number;
  endTime: number;
  status: AppointmentStatus;
  createdAt: number;
  updatedAt: number;
};

export type AppointmentType = Appointment;

export type CreateAppointmentPayload = {
  slotId: string;
  userId: string;
  doctorId: string;
  doctorName: string;
  serviceType: string[];
  totalPrice: number;
};

export type CancelAppointmentPayload = {
  appointmentId: string;
  slotId: string;
};

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

const isAppointmentWithinRange = (
  appointment: Appointment,
  startTime: number,
  endTime: number,
) => appointment.startTime >= startTime && appointment.startTime <= endTime;

export const getAppointmentsByDoctorAndDate = async (
  doctorId: string,
  startOfDay: number,
  endOfDay: number,
): Promise<Appointment[]> => {
  await initializeFirebaseApp();

  const db = getDb();

  try {
    const appointmentsQuery = query(
      collection(db, APPOINTMENTS_COLLECTION),
      where('doctorId', '==', doctorId),
    );
    const snapshot = await getDocs(appointmentsQuery);

    return snapshot.docs
      .map(docSnapshot => ({
        id: docSnapshot.id,
        ...(docSnapshot.data() as Omit<Appointment, 'id'>),
      }))
      .filter(appointment =>
        isAppointmentWithinRange(appointment, startOfDay, endOfDay),
      )
      .sort((a, b) => a.startTime - b.startTime);
  } catch (error) {
    console.error('getAppointmentsByDoctorAndDate error:', error);
    throw error;
  }
};

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

export const getNextUserAppointment = async (
  userId: string,
): Promise<Appointment | null> => {
  const appointments = await getUserAppointments(userId);

  return getNextUpcomingAppointment(appointments);
};

export const createAppointment = async ({
  slotId,
  userId,
  doctorId,
  doctorName,
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

    transaction.update(slotRef, {
      isBooked: true,
      bookedBy: userId,
    });

    transaction.set(appointmentRef, {
      userId,
      doctorId,
      slotId,
      doctorName,
      serviceType,
      totalPrice,
      startTime: data?.startTime,
      endTime: data?.endTime,
      status: 'upcoming',
      createdAt: now,
      updatedAt: now,
    });
  });

  return { id: appointmentRef.id, success: true };
};

export const cancelAppointment = async ({
  appointmentId,
  slotId,
}: CancelAppointmentPayload) => {
  await initializeFirebaseApp();

  const db = getDb();
  const appointmentRef = doc(db, APPOINTMENTS_COLLECTION, appointmentId);
  const slotRef = doc(db, SLOTS_COLLECTION, slotId);

  try {
    await runTransaction(db, async transaction => {
      const appointmentSnapshot = await transaction.get(appointmentRef);

      if (!appointmentSnapshot.exists()) {
        throw new Error('Appointment not found');
      }

      transaction.update(appointmentRef, {
        status: 'cancelled',
        updatedAt: Date.now(),
      });

      transaction.update(slotRef, {
        isBooked: false,
        bookedBy: null,
      });
    });
  } catch (error: any) {
    if (error?.message === 'Appointment not found') {
      throw error;
    }

    throw new Error('Unable to cancel appointment');
  }

  return { success: true };
};
