import { DoctorType } from '../../interfaces/doctor.types';

export type DoctorCardProps = {
  doctor: DoctorType;
  onPressContinue: () => void;
  onPressDoctorProfile: () => void;
};
