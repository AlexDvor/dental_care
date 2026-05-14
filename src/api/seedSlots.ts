import { addDoc, collection } from '@react-native-firebase/firestore';

import { DOCTORS } from '../mockData/doctors';
import { getDb, initializeFirebaseApp } from './firebase';

const SLOTS_COLLECTION = 'slots';

export const seedSlots = async () => {
  const days = 2;

  console.log(
    `Starting seed for ${DOCTORS.length} doctors for ${days} days...`,
  );

  try {
    await initializeFirebaseApp();

    const db = getDb();

    for (const doctor of DOCTORS) {
      const startHour = parseInt(doctor.workingHours.start.split(':')[0], 10);
      const endHour = parseInt(doctor.workingHours.end.split(':')[0], 10);
      const slotDurationMinutes = doctor.slotDuration || 30;

      console.log(
        `Seeding doctor: ${doctor.id} (${doctor.name}), Duration: ${slotDurationMinutes}min`,
      );

      for (let day = 0; day < days; day++) {
        const baseDate = new Date();
        baseDate.setDate(baseDate.getDate() + day);
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

          await addDoc(collection(db, SLOTS_COLLECTION), {
            doctorId: doctor.id,
            startTime,
            endTime,
            isBooked: false,
            bookedBy: null,
            createdAt: Date.now(),
          });
        }
      }
    }

    console.log('Slots created successfully!');
  } catch (error: any) {
    console.error('seedSlots error:', error.message, error);
  }
};
