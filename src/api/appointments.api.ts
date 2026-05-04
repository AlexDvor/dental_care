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

    await runTransaction(db, async transaction => {
      // 🔍 1. перевіряємо конфлікти
      const appointmentsRef = collection(db, 'appointments');

      // ❗ тут немає query в transaction, тому беремо всі лікаря (MVP ок)
      // production — краще через cloud function або індекси

      const snapshot = await transaction.get(appointmentsRef);

      const hasConflict = snapshot.docs.some(doc => {
        const data = doc.data();

        if (data.doctorId !== doctorId) return false;

        return startTime < data.endTime && endTime > data.startTime;
      });

      if (hasConflict) {
        throw new Error('Time slot already booked');
      }

      // ✅ 2. створюємо запис
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
