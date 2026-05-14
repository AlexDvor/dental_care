import {
  addDoc,
  collection,
  getDocs,
  limit,
  query,
  where,
} from '@react-native-firebase/firestore';

import { DOCTORS } from '../mockData/doctors';
import { getDb, initializeFirebaseApp } from './firebase';

const SLOTS_COLLECTION = 'slots';

type SeedSlotsOptions = {
  days?: number;
  doctorId?: string;
  startDate?: Date;
};

type SeedSlotsResult = {
  created: number;
  skipped: number;
  doctorsProcessed: number;
};

const hasExistingSlot = async (doctorId: string, startTime: number) => {
  const db = getDb();
  const existingSlotQuery = query(
    collection(db, SLOTS_COLLECTION),
    where('doctorId', '==', doctorId),
    where('startTime', '==', startTime),
    limit(1),
  );
  const snapshot = await getDocs(existingSlotQuery);

  return !snapshot.empty;
};

export const seedSlots = async (
  options: SeedSlotsOptions = {},
): Promise<SeedSlotsResult> => {
  const { days = 14, doctorId, startDate = new Date() } = options;
  const result: SeedSlotsResult = {
    created: 0,
    skipped: 0,
    doctorsProcessed: 0,
  };
  const doctors = doctorId
    ? DOCTORS.filter(doctor => doctor.id === doctorId)
    : DOCTORS;

  console.log(
    `Starting seed for ${doctors.length} doctors for ${days} days...`,
  );

  try {
    await initializeFirebaseApp();

    const db = getDb();

    for (const doctor of doctors) {
      result.doctorsProcessed += 1;

      const startHour = parseInt(doctor.workingHours.start.split(':')[0], 10);
      const endHour = parseInt(doctor.workingHours.end.split(':')[0], 10);
      const slotDurationMinutes = doctor.slotDuration || 30;

      console.log(
        `Seeding doctor: ${doctor.id} (${doctor.name}), Duration: ${slotDurationMinutes}min`,
      );

      for (let day = 0; day < days; day++) {
        const baseDate = new Date(startDate);
        baseDate.setDate(startDate.getDate() + day);
        baseDate.setHours(0, 0, 0, 0);

        const year = baseDate.getFullYear();
        const month = baseDate.getMonth();
        const date = baseDate.getDate();

        for (
          let hour = startHour;
          hour < endHour;
          hour += slotDurationMinutes / 60
        ) {
          const startTime = Date.UTC(year, month, date, hour, 0, 0);
          const endTime = startTime + slotDurationMinutes * 60 * 1000;

          const slotExists = await hasExistingSlot(doctor.id, startTime);

          if (slotExists) {
            result.skipped += 1;
            continue;
          }

          await addDoc(collection(db, SLOTS_COLLECTION), {
            doctorId: doctor.id,
            startTime,
            endTime,
            isBooked: false,
            bookedBy: null,
            createdAt: Date.now(),
          });
          result.created += 1;
        }
      }
    }

    console.log('Slots seed completed:', result);
  } catch (error: any) {
    console.error('seedSlots error:', error.message, error);
  }

  return result;
};
