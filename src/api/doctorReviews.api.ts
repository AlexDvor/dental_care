import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  runTransaction,
  where,
} from '@react-native-firebase/firestore';

import { COLLECTION_NAME } from '../constants/collections';
import { Appointment } from '../interfaces/appointment.types';
import {
  CreateDoctorReviewPayload,
  DoctorReview,
  ReviewRating,
} from '../interfaces/doctorReview.types';
import { getDb, initializeFirebaseApp } from './firebase';

export type {
  CreateDoctorReviewPayload,
  DoctorReview,
  ReviewRating,
} from '../interfaces/doctorReview.types';

const getReviewId = (appointmentId: string, userId: string) =>
  `${appointmentId}_${userId}`;

export const getDoctorReviews = async (
  doctorId: string,
): Promise<DoctorReview[]> => {
  await initializeFirebaseApp();

  const db = getDb();
  const reviewsQuery = query(
    collection(db, COLLECTION_NAME.DOCTOR_REVIEWS),
    where('doctorId', '==', doctorId),
  );
  const snapshot = await getDocs(reviewsQuery);

  return snapshot.docs
    .map(review => ({
      id: review.id,
      ...(review.data() as Omit<DoctorReview, 'id'>),
    }))
    .sort((a, b) => b.createdAt - a.createdAt);
};

export const getReviewByAppointment = async (
  appointmentId: string,
  userId: string,
): Promise<DoctorReview | null> => {
  await initializeFirebaseApp();

  const db = getDb();
  const reviewRef = doc(
    db,
    COLLECTION_NAME.DOCTOR_REVIEWS,
    getReviewId(appointmentId, userId),
  );
  const snapshot = await getDoc(reviewRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<DoctorReview, 'id'>),
  };
};

export const createDoctorReview = async ({
  appointmentId,
  userId,
  doctorId,
  userName,
  rating,
  text,
}: CreateDoctorReviewPayload) => {
  if (rating < 1 || rating > 5) {
    throw new Error('Rating must be between 1 and 5');
  }

  await initializeFirebaseApp();

  const db = getDb();
  const appointmentRef = doc(db, COLLECTION_NAME.APPOINTMENTS, appointmentId);
  const reviewRef = doc(
    db,
    COLLECTION_NAME.DOCTOR_REVIEWS,
    getReviewId(appointmentId, userId),
  );

  await runTransaction(db, async transaction => {
    const appointmentSnapshot = await transaction.get(appointmentRef);
    const reviewSnapshot = await transaction.get(reviewRef);

    if (!appointmentSnapshot.exists()) {
      throw new Error('Appointment not found');
    }

    const appointment = appointmentSnapshot.data() as Appointment;

    if (
      appointment.userId !== userId ||
      appointment.doctorId !== doctorId ||
      appointment.status !== 'completed'
    ) {
      throw new Error('Review is not available');
    }

    if (reviewSnapshot.exists()) {
      throw new Error('Review already exists');
    }

    transaction.set(reviewRef, {
      appointmentId,
      userId,
      doctorId,
      userName,
      rating: rating as ReviewRating,
      text: text.trim(),
      createdAt: Date.now(),
    });
  });

  return { success: true };
};
