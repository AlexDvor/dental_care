import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { DOCTORS } from '../mockData/doctors';

export const seedDoctors = async () => {
  for (const doctor of DOCTORS) {
    await addDoc(collection(db, 'doctors'), doctor);
  }

  console.log('🔥 Data seeded!');
};
