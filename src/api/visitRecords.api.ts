import {
  collection,
  getDocs,
  query,
  where,
} from '@react-native-firebase/firestore';

import { COLLECTION_NAME } from '../constants/collections';
import { getDb, initializeFirebaseApp } from './firebase';

export type VisitRecord = {
  id: string;
  appointmentId: string;
  userId: string;
  doctorId: string;
  diagnosis: string;
  procedures: string[];
  toothNumbers: string[];
  notes?: string;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
};

export type VisitRecordPayload = Omit<
  VisitRecord,
  'id' | 'createdAt' | 'updatedAt'
>;

export const getVisitRecordByAppointment = async (
  appointmentId: string,
  userId: string,
): Promise<VisitRecord | null> => {
  await initializeFirebaseApp();

  const db = getDb();
  const visitRecordQuery = query(
    collection(db, COLLECTION_NAME.VISIT_RECORDS),
    where('appointmentId', '==', appointmentId),
  );
  const snapshot = await getDocs(visitRecordQuery);
  const visitRecord = snapshot.docs.find(item => item.data().userId === userId);

  if (!visitRecord) {
    return null;
  }

  return {
    id: visitRecord.id,
    ...(visitRecord.data() as Omit<VisitRecord, 'id'>),
  };
};
