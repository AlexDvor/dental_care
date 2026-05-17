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
