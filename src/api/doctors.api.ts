import { collection, doc, getDoc,getDocs } from 'firebase/firestore';

import { DoctorType } from '../interfaces/doctor.types';
import { db } from './firebase';

export const getDoctors = async (): Promise<DoctorType[]> => {
  try {
    const snapshot = await getDocs(collection(db, 'doctors'));

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<DoctorType, 'id'>),
    }));
  } catch (error) {
    console.error('❌ getDoctors error:', error);
    throw error;
  }
};

export const getDoctorById = async (id: string): Promise<DoctorType | null> => {
  try {
    const docRef = doc(db, 'doctors', id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) return null;

    return {
      id: snapshot.id,
      ...(snapshot.data() as Omit<DoctorType, 'id'>),
    };
  } catch (error) {
    console.error('❌ getDoctorById error:', error);
    throw error;
  }
};
