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

// 🔥 залишаємо тільки якщо десь ще використовується
export const getAppointmentsByDoctorAndDate = async (
  doctorId: string,
  startOfDay: number,
  endOfDay: number,
): Promise<AppointmentType[]> => {
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
};

// ✅ SLOT-BASED
export const createAppointment = async ({
  slotId,
  userId,
}: {
  slotId: string;
  userId: string;
}) => {
  const slotRef = doc(db, 'slots', slotId);

  await runTransaction(db, async transaction => {
    const snapshot = await transaction.get(slotRef);

    if (!snapshot.exists()) {
      throw new Error('Slot not found');
    }

    const data = snapshot.data();

    if (data.isBooked) {
      throw new Error('Time slot already booked');
    }

    transaction.update(slotRef, {
      isBooked: true,
      bookedBy: userId,
    });
  });

  return { success: true };
};
