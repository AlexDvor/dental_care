import { DoctorType } from '../../../interfaces/doctor.types';

export type StatsRowProps = Pick<DoctorType, 'experience' | 'stats'>;

export type StatProps = {
  value: string;
  label: string;
};
