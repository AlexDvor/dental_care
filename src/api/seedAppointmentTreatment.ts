import {
  collection,
  doc,
  runTransaction,
} from '@react-native-firebase/firestore';

import { COLLECTION_NAME } from '../constants/collections';
import {
  DentalTreatmentCaseKey,
  dentalTreatmentCases,
} from '../mockData/dentalTreatmentCases';
import { getDateKey } from '../utils/Date/getDateKey';
import { parseDateKey } from '../utils/Date/parseDateKey';
import { Appointment } from './appointments.api';
import { getDb, initializeFirebaseApp } from './firebase';

export type SeedAppointmentTreatmentPayload = {
  userId: string;
  appointmentId: string;
  treatmentCase: DentalTreatmentCaseKey;
  actorId: string;
  startDate?: Date | string;
};

export type SeedAppointmentTreatmentResult = {
  created: number;
  updated: number;
  skipped: number;
  appointmentId: string;
  treatmentCase: DentalTreatmentCaseKey;
};

const getSeedDateKey = (date: Date | string = new Date()) => {
  if (typeof date === 'string') {
    return date;
  }

  return getDateKey(date);
};

const addDays = (date: string, days: number) => {
  const nextDate = parseDateKey(date);
  nextDate.setDate(nextDate.getDate() + days);

  return getDateKey(nextDate);
};

const getTreatmentPlanId = (
  appointmentId: string,
  treatmentCase: DentalTreatmentCaseKey,
  medicationId: string,
) => `${appointmentId}_${treatmentCase}_${medicationId}`;

export const seedAppointmentTreatment = async ({
  userId,
  appointmentId,
  treatmentCase,
  actorId,
  startDate,
}: SeedAppointmentTreatmentPayload): Promise<SeedAppointmentTreatmentResult> => {
  await initializeFirebaseApp();

  const db = getDb();
  const treatment = dentalTreatmentCases[treatmentCase];

  if (!treatment) {
    throw new Error('Unknown treatment case');
  }

  const now = Date.now();
  const nowIso = new Date(now).toISOString();
  const treatmentStartDate = getSeedDateKey(startDate);
  const appointmentRef = doc(db, COLLECTION_NAME.APPOINTMENTS, appointmentId);
  const visitRecordRef = doc(db, COLLECTION_NAME.VISIT_RECORDS, appointmentId);
  const treatmentPlanRefs = treatment.medications.map(medication => ({
    medication,
    ref: doc(
      collection(db, COLLECTION_NAME.TREATMENT_PLANS),
      getTreatmentPlanId(appointmentId, treatmentCase, medication.id),
    ),
  }));
  const result: SeedAppointmentTreatmentResult = {
    created: 0,
    updated: 0,
    skipped: 0,
    appointmentId,
    treatmentCase,
  };

  await runTransaction(db, async transaction => {
    const appointmentSnapshot = await transaction.get(appointmentRef);
    const visitRecordSnapshot = await transaction.get(visitRecordRef);
    const treatmentPlanSnapshots = [];

    if (!appointmentSnapshot.exists()) {
      throw new Error('Appointment not found');
    }

    const appointment = appointmentSnapshot.data() as Appointment;

    if (appointment.userId !== userId) {
      throw new Error('Appointment does not belong to user');
    }

    if (
      appointment.status === 'cancelled' ||
      appointment.status === 'missed'
    ) {
      throw new Error('Appointment cannot be seeded');
    }

    for (const treatmentPlanRef of treatmentPlanRefs) {
      treatmentPlanSnapshots.push({
        medication: treatmentPlanRef.medication,
        ref: treatmentPlanRef.ref,
        snapshot: await transaction.get(treatmentPlanRef.ref),
      });
    }

    if (appointment.status === 'completed') {
      result.skipped += 1;
    } else {
      transaction.update(appointmentRef, {
        status: 'completed',
        completedAt: now,
        completedBy: actorId,
        updatedAt: now,
      });
      result.updated += 1;
    }

    transaction.set(visitRecordRef, {
      appointmentId,
      userId: appointment.userId,
      doctorId: appointment.doctorId,
      diagnosis: treatment.diagnosis,
      procedures: treatment.procedures,
      toothNumbers: treatment.toothNumbers,
      notes: `${treatment.description} ${treatment.notes}`,
      createdBy: actorId,
      createdAt: visitRecordSnapshot.exists()
        ? visitRecordSnapshot.data()?.createdAt ?? now
        : now,
      updatedAt: now,
    });

    if (visitRecordSnapshot.exists()) {
      result.updated += 1;
    } else {
      result.created += 1;
    }

    for (const { medication, ref, snapshot } of treatmentPlanSnapshots) {
      const endDate = addDays(treatmentStartDate, medication.durationDays - 1);

      transaction.set(ref, {
        appointmentId,
        userId: appointment.userId,
        doctorId: appointment.doctorId,
        title: medication.title,
        diagnosis: treatment.diagnosis,
        prescribedBy: appointment.doctorName,
        medicationName: medication.medicationName,
        strength: medication.strength,
        doseAmount: medication.doseAmount,
        form: medication.form,
        startDate: treatmentStartDate,
        endDate,
        times: medication.times,
        status: 'active',
        instructions: medication.instructions,
        createdAt: snapshot.exists()
          ? snapshot.data()?.createdAt ?? nowIso
          : nowIso,
        updatedAt: nowIso,
      });

      if (snapshot.exists()) {
        result.updated += 1;
      } else {
        result.created += 1;
      }
    }
  });

  console.log('Appointment treatment seed completed:', result);

  return result;
};
