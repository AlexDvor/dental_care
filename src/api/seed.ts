import { collection, doc, setDoc } from '@react-native-firebase/firestore';

import { COLLECTION_NAME } from '../constants/collections';
import { DOCTORS } from '../mockData/doctors';
import { getDb, initializeFirebaseApp } from './firebase';

export const seedDoctors = async () => {
  try {
    await initializeFirebaseApp();

    const db = getDb();
    const promises = DOCTORS.map(doctor =>
      setDoc(doc(collection(db, COLLECTION_NAME.DOCTORS), doctor.id), doctor),
    );

    await Promise.all(promises);

    console.log('Doctors seeded successfully!');
  } catch (error) {
    console.error('Seed error:', error);
  }
};
