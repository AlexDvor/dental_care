import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

import { DoctorType } from '../interfaces/doctor.types';
import { db } from './firebase';

const mapDoctor = (doc: any): DoctorType => {
  return {
    id: doc.id,
    ...(doc.data() as Omit<DoctorType, 'id'>),
  };
};

export const getDoctors = async (): Promise<DoctorType[]> => {
  try {
    const snapshot = await getDocs(collection(db, 'doctors'));

    return snapshot.docs.map(mapDoctor);
  } catch (error) {
    console.error('❌ getDoctors failed:', error);
    throw new Error('Failed to fetch doctors');
  }
};

export const getDoctorById = async (id: string): Promise<DoctorType> => {
  try {
    const docRef = doc(db, 'doctors', id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      throw new Error(`Doctor with id ${id} not found`);
    }

    return mapDoctor(snapshot);
  } catch (error) {
    console.error('❌ getDoctorById failed:', error);
    throw new Error('Failed to fetch doctor');
  }
};
