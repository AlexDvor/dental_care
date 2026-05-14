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

export type AppointmentType = {
  id: string;
  doctorId: string;
  startTime: number;
  endTime: number;
};

export const getAppointmentsByDoctorAndDate = async (
  doctorId: string,
  startOfDay: number,
  endOfDay: number,
): Promise<AppointmentType[]> => {
  await initializeFirebaseApp();

  const db = getDb();
  const appointmentsQuery = query(
    collection(db, APPOINTMENTS_COLLECTION),
    where('doctorId', '==', doctorId),
    where('startTime', '>=', startOfDay),
    where('startTime', '<=', endOfDay),
  );
  const snapshot = await getDocs(appointmentsQuery);

  return snapshot.docs.map(docSnapshot => ({
    id: docSnapshot.id,
    ...(docSnapshot.data() as Omit<AppointmentType, 'id'>),
  }));
};

export const createAppointment = async ({
  slotId,
  userId,
}: {
  slotId: string;
  userId: string;
}) => {
  await initializeFirebaseApp();

  const db = getDb();
  const slotRef = doc(db, SLOTS_COLLECTION, slotId);

  await runTransaction(db, async transaction => {
    const snapshot = await transaction.get(slotRef);

    if (!snapshot.exists()) {
      throw new Error('Slot not found');
    }

    const data = snapshot.data();

    if (data?.isBooked) {
      throw new Error('Time slot already booked');
    }

    transaction.update(slotRef, {
      isBooked: true,
      bookedBy: userId,
    });
  });

  return { success: true };
};
