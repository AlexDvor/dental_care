import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { DOCTORS } from '../mockData/doctors';

export const seedDoctors = async () => {
  try {
    const collectionRef = collection(db, 'doctors');

    for (const doctor of DOCTORS) {
      const { id, ...doctorData } = doctor;

      await addDoc(collectionRef, doctorData);
    }

    console.log('🔥 Data seeded!');
  } catch (error) {
    console.error('❌ Seed error:', error);
  }
};
