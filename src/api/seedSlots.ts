import { collection, doc, setDoc } from 'firebase/firestore';

import { db } from '../api/firebase';
import { DOCTORS } from '../mockData/doctors';

export const seedSlots = async () => {
  const days = 7; // скільки днів вперед генеруємо

  try {
    for (const doctor of DOCTORS) {
      const startHour = parseInt(doctor.workingHours.start.split(':')[0], 10);
      const endHour = parseInt(doctor.workingHours.end.split(':')[0], 10);

      for (let day = 0; day < days; day++) {
        const baseDate = new Date();
        baseDate.setDate(baseDate.getDate() + day);

        const year = baseDate.getFullYear();
        const month = baseDate.getMonth();
        const date = baseDate.getDate();

        for (
          let hour = startHour;
          hour < endHour;
          hour += doctor.slotDuration / 60
        ) {
          // 🔥 UTC (КРИТИЧНО)
          const startTime = Date.UTC(year, month, date, hour, 0, 0);

          const endTime = startTime + doctor.slotDuration * 60 * 1000;

          const slotRef = doc(collection(db, 'slots'));

          await setDoc(slotRef, {
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

    console.log('🔥 Slots created for ALL doctors');
  } catch (error) {
    console.error('❌ seedSlots error:', error);
  }
};
