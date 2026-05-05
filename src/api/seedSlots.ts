// src/api/seedSlots.ts
import { collection, doc, setDoc } from 'firebase/firestore';

import { db } from '../api/firebase';
import { DOCTORS } from '../mockData/doctors';

export const seedSlots = async () => {
  const days = 2; // ✅ Зменшено до 2 днів для швидкого тестування

  console.log(
    `🌱 Starting seed for ${DOCTORS.length} doctors for ${days} days...`,
  );

  try {
    for (const doctor of DOCTORS) {
      const startHour = parseInt(doctor.workingHours.start.split(':')[0], 10);
      const endHour = parseInt(doctor.workingHours.end.split(':')[0], 10);

      // Тривалість слоту в хвилинах
      const slotDurationMinutes = doctor.slotDuration || 30;

      console.log(
        `👨‍⚕️ Seeding doctor: ${doctor.id} (${doctor.name}), Duration: ${slotDurationMinutes}min`,
      );

      for (let day = 0; day < days; day++) {
        const baseDate = new Date();
        baseDate.setDate(baseDate.getDate() + day);
        baseDate.setHours(0, 0, 0, 0);

        const year = baseDate.getFullYear();
        const month = baseDate.getMonth();
        const date = baseDate.getDate();

        // Генеруємо слоти
        for (
          let hour = startHour;
          hour < endHour;
          // ✅ Коректна інкрементація: додаємо тривалість слота в годинах
          hour += slotDurationMinutes / 60
        ) {
          const startTime = Date.UTC(year, month, date, hour, 0, 0);
          const endTime = startTime + slotDurationMinutes * 60 * 1000;

          // Firestore автоматично створить унікальний ID для документа
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

    console.log('🔥 Slots created successfully!');
  } catch (error: any) {
    console.error('❌ seedSlots error:', error.message, error);
  }
};
