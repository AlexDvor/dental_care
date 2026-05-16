import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  runTransaction,
  where,
} from '@react-native-firebase/firestore';

import { Appointment } from './appointments.api';
import { getDb, initializeFirebaseApp } from './firebase';

const APPOINTMENTS_COLLECTION = 'appointments';
const DOCTOR_REVIEWS_COLLECTION = 'doctorReviews';

export type ReviewRating = 1 | 2 | 3 | 4 | 5;

export type DoctorReview = {
  id: string;
  appointmentId: string;
  userId: string;
  doctorId: string;
  userName: string;
  rating: ReviewRating;
  text: string;
  createdAt: number;
};

export type CreateDoctorReviewPayload = {
  appointmentId: string;
  userId: string;
  doctorId: string;
  userName: string;
  rating: number;
  text: string;
};

const getReviewId = (appointmentId: string, userId: string) =>
  `${appointmentId}_${userId}`;

export const getDoctorReviews = async (
  doctorId: string,
): Promise<DoctorReview[]> => {
  await initializeFirebaseApp();

  const db = getDb();
  const reviewsQuery = query(
    collection(db, DOCTOR_REVIEWS_COLLECTION),
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
    DOCTOR_REVIEWS_COLLECTION,
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
  const appointmentRef = doc(db, APPOINTMENTS_COLLECTION, appointmentId);
  const reviewRef = doc(
    db,
    DOCTOR_REVIEWS_COLLECTION,
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
