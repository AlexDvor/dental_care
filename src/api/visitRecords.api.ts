import {
  collection,
  getDocs,
  query,
  where,
} from '@react-native-firebase/firestore';

import { getDb, initializeFirebaseApp } from './firebase';

const VISIT_RECORDS_COLLECTION = 'visitRecords';

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

export type VisitRecordPayload = Omit<VisitRecord, 'id' | 'createdAt' | 'updatedAt'>;

export const getVisitRecordByAppointment = async (
  appointmentId: string,
  userId: string,
): Promise<VisitRecord | null> => {
  await initializeFirebaseApp();

  const db = getDb();
  const visitRecordQuery = query(
    collection(db, VISIT_RECORDS_COLLECTION),
    where('appointmentId', '==', appointmentId),
  );
  const snapshot = await getDocs(visitRecordQuery);
  const visitRecord = snapshot.docs.find(
    item => item.data().userId === userId,
  );

  if (!visitRecord) {
    return null;
  }

  return {
    id: visitRecord.id,
    ...(visitRecord.data() as Omit<VisitRecord, 'id'>),
  };
};
