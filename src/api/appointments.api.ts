import {
  collection,
  doc,
  getDocs,
  query,
  runTransaction,
  where,
} from 'firebase/firestore';

import { db } from './firebase';

export type AppointmentType = {
  id: string;
  doctorId: string;
  startTime: number;
  endTime: number;
};

type CreateAppointmentParams = {
  doctorId: string;
  userId: string;
  startTime: number;
  endTime: number;
};

export const getAppointmentsByDoctorAndDate = async (
  doctorId: string,
  startOfDay: number,
  endOfDay: number,
): Promise<AppointmentType[]> => {
  try {
    const q = query(
      collection(db, 'appointments'),
      where('doctorId', '==', doctorId),
      where('startTime', '>=', startOfDay),
      where('startTime', '<=', endOfDay),
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<AppointmentType, 'id'>),
    }));
  } catch (error) {
    console.error('❌ getAppointments error:', error);
    throw new Error('Failed to fetch appointments');
  }
};

export const createAppointment = async ({
  doctorId,
  userId,
  startTime,
  endTime,
}: CreateAppointmentParams) => {
  try {
    const appointmentRef = doc(collection(db, 'appointments'));

    const snapshot = await getDocs(
      query(
        collection(db, 'appointments'),
        where('doctorId', '==', doctorId),
        where('startTime', '>=', startTime - 1000 * 60 * 60 * 24),
        where('startTime', '<=', endTime + 1000 * 60 * 60 * 24),
      ),
    );

    const hasConflict = snapshot.docs.some(doc => {
      const data = doc.data();

      return startTime < data.endTime && endTime > data.startTime;
    });

    if (hasConflict) {
      throw new Error('Time slot already booked');
    }

    //  запис
    await runTransaction(db, async transaction => {
      transaction.set(appointmentRef, {
        doctorId,
        userId,
        startTime,
        endTime,
        createdAt: Date.now(),
      });
    });

    return { success: true };
  } catch (error) {
    console.error('❌ createAppointment error:', error);
    throw error;
  }
};
