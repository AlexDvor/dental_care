import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from './firebase';

export type SlotType = {
  id: string;
  doctorId: string;
  startTime: number;
  endTime: number;
  isBooked: boolean;
};

export const getSlotsByDoctorAndMonth = async (
  doctorId: string,
  start: number,
  end: number,
): Promise<SlotType[]> => {
  const q = query(
    collection(db, 'slots'),
    where('doctorId', '==', doctorId),
    where('startTime', '>=', start),
    where('startTime', '<=', end),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<SlotType, 'id'>),
  }));
};
