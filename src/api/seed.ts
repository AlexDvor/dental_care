import { doc, setDoc } from 'firebase/firestore';

import { DOCTORS } from '../mockData/doctors';
import { db } from './firebase';

export const seedDoctors = async () => {
  try {
    const promises = DOCTORS.map(doctor => {
      const docRef = doc(db, 'doctors', doctor.id);
      return setDoc(docRef, doctor, { merge: true });
    });

    await Promise.all(promises);

    console.log('🔥 Doctors seeded successfully!');
  } catch (error) {
    console.error('❌ Seed error:', error);
  }
};
