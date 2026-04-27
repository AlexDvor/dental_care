import { DOCTORS } from '../mockData/doctors';

export const getDoctorById = (id: string) =>
  DOCTORS.find(doctor => doctor.id === id);
