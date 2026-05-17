import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from '@react-native-firebase/firestore';

import { COLLECTION_NAME } from '../constants/collections';
import { MedicationIntake, TreatmentPlan } from '../interfaces/medication';
import { getDb, initializeFirebaseApp } from './firebase';

export type UserTreatmentPlan = TreatmentPlan & {
  appointmentId: string;
  userId: string;
  doctorId: string;
};

export type UserMedicationIntake = MedicationIntake & {
  userId: string;
};

export type MarkMedicationIntakeTakenPayload = {
  userId: string;
  treatmentPlanId: string;
  scheduledDate: string;
  scheduledTime: string;
  scheduledAt: string;
};

const mapTreatmentPlans = async (
  field: 'userId' | 'appointmentId',
  value: string,
  userId?: string,
): Promise<UserTreatmentPlan[]> => {
  await initializeFirebaseApp();

  const db = getDb();
  const treatmentPlansQuery = query(
    collection(db, COLLECTION_NAME.TREATMENT_PLANS),
    where(field, '==', value),
  );
  const snapshot = await getDocs(treatmentPlansQuery);

  return snapshot.docs
    .map(plan => ({
      id: plan.id,
      ...(plan.data() as Omit<UserTreatmentPlan, 'id'>),
    }))
    .filter(plan => !userId || plan.userId === userId)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
};

export const getTreatmentPlansByUser = (userId: string) =>
  mapTreatmentPlans('userId', userId);

export const getTreatmentPlansByAppointment = (
  appointmentId: string,
  userId: string,
) => mapTreatmentPlans('appointmentId', appointmentId, userId);

export const getMedicationIntakesByUser = async (
  userId: string,
): Promise<UserMedicationIntake[]> => {
  await initializeFirebaseApp();

  const db = getDb();
  const intakesQuery = query(
    collection(db, COLLECTION_NAME.MEDICATION_INTAKES),
    where('userId', '==', userId),
  );
  const snapshot = await getDocs(intakesQuery);

  return snapshot.docs.map(intake => ({
    id: intake.id,
    ...(intake.data() as Omit<UserMedicationIntake, 'id'>),
  }));
};

export const markMedicationIntakeTaken = async ({
  userId,
  treatmentPlanId,
  scheduledDate,
  scheduledTime,
  scheduledAt,
}: MarkMedicationIntakeTakenPayload) => {
  await initializeFirebaseApp();

  const db = getDb();
  const now = new Date().toISOString();
  const intakeId = `${treatmentPlanId}_${scheduledDate}_${scheduledTime.replace(
    ':',
    '-',
  )}`;

  await setDoc(
    doc(db, COLLECTION_NAME.MEDICATION_INTAKES, intakeId),
    {
      userId,
      treatmentPlanId,
      scheduledDate,
      scheduledTime,
      scheduledAt,
      status: 'taken',
      takenAt: now,
      createdAt: now,
      updatedAt: now,
    },
    { merge: true },
  );

  return { success: true };
};
