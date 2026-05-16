import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import {
  collection,
  doc,
  getDoc,
  getDocs,
} from '@react-native-firebase/firestore';

import { COLLECTION_NAME } from '../constants/collections';
import { DoctorType } from '../interfaces/doctor.types';
import { getDb, initializeFirebaseApp } from './firebase';

const mapDoctor = (id: string, data: FirebaseFirestoreTypes.DocumentData) => {
  return {
    id,
    ...(data as Omit<DoctorType, 'id'>),
  };
};

export const getDoctors = async (): Promise<DoctorType[]> => {
  try {
    await initializeFirebaseApp();

    const db = getDb();
    const snapshot = await getDocs(collection(db, COLLECTION_NAME.DOCTORS));

    return snapshot.docs.map(docSnapshot =>
      mapDoctor(docSnapshot.id, docSnapshot.data()),
    );
  } catch (error) {
    console.error('getDoctors failed:', error);
    throw new Error('Failed to fetch doctors');
  }
};

export const getDoctorById = async (id: string): Promise<DoctorType> => {
  try {
    await initializeFirebaseApp();

    const db = getDb();
    const snapshot = await getDoc(doc(db, COLLECTION_NAME.DOCTORS, id));

    if (!snapshot.exists()) {
      throw new Error(`Doctor with id ${id} not found`);
    }

    return mapDoctor(snapshot.id, snapshot.data() || {});
  } catch (error) {
    console.error('getDoctorById failed:', error);
    throw new Error('Failed to fetch doctor');
  }
};
