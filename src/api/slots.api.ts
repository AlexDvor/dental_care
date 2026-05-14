import {
  collection,
  getDocs,
  query,
  where,
} from '@react-native-firebase/firestore';

import { getDb, initializeFirebaseApp } from './firebase';

const SLOTS_COLLECTION = 'slots';

export interface SlotType {
  id: string;
  doctorId: string;
  startTime: number;
  endTime: number;
  isBooked: boolean;
  bookedBy?: string | null;
}

export const getSlotsByDoctorAndMonth = async (
  doctorId: string,
  start: number,
  end: number,
): Promise<SlotType[]> => {
  console.log('Querying Firestore:', { doctorId, start, end });

  if (start > end) {
    console.error('Invalid range: start > end');
    return [];
  }

  try {
    await initializeFirebaseApp();

    const db = getDb();
    const slotsQuery = query(
      collection(db, SLOTS_COLLECTION),
      where('doctorId', '==', doctorId),
      where('startTime', '>=', start),
      where('startTime', '<=', end),
    );
    const snapshot = await getDocs(slotsQuery);

    if (snapshot.empty) {
      console.log('No documents found for this query.');
      return [];
    }

    const slots = snapshot.docs.map(docSnapshot => {
      const data = docSnapshot.data();

      return {
        id: docSnapshot.id,
        doctorId: data.doctorId,
        startTime: data.startTime,
        endTime: data.endTime,
        isBooked: data.isBooked || false,
        bookedBy: data.bookedBy || null,
      } as SlotType;
    });

    console.log(`Found ${slots.length} slots. Sample:`, slots[0]);
    return slots;
  } catch (error: any) {
    console.error('Firestore query error:', error.message);
    throw error;
  }
};
