import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from './firebase';

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
  console.log('🚀 Querying Firestore:', { doctorId, start, end });

  // Перевірка: якщо діапазон невірний (start > end), це може бути помилка
  if (start > end) {
    console.error('❌ Invalid range: start > end');
    return [];
  }

  const q = query(
    collection(db, 'slots'),
    where('doctorId', '==', doctorId),
    where('startTime', '>=', start),
    where('startTime', '<=', end),
  );

  try {
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.log('📭 No documents found for this query.');
      return [];
    }

    const slots = snapshot.docs.map(docSnap => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        doctorId: data.doctorId,
        startTime: data.startTime,
        endTime: data.endTime,
        isBooked: data.isBooked || false,
        bookedBy: data.bookedBy || null,
      } as SlotType;
    });

    console.log(`✅ Found ${slots.length} slots. Sample:`, slots[0]);
    return slots;
  } catch (error: any) {
    console.error('❌ Firestore query error:', error.message);
    throw error;
  }
};
