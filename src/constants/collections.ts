export const COLLECTION_NAME = {
  APPOINTMENTS: 'appointments',
  SLOTS: 'slots',
  DOCTORS: 'doctors',
  DOCTOR_REVIEWS: 'doctorReviews',
  VISIT_RECORDS: 'visitRecords',
  TREATMENT_PLANS: 'treatmentPlans',
  MEDICATION_INTAKES: 'medicationIntakes',
} as const;

export type CollectionNames =
  (typeof COLLECTION_NAME)[keyof typeof COLLECTION_NAME];
