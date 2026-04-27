import { DoctorType } from '../../../interfaces/doctor.types';

export type DoctorHeaderProps = Pick<
  DoctorType,
  'name' | 'image' | 'rating' | 'reviews' | 'specialty'
>;
