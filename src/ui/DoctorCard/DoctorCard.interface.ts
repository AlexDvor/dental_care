export interface DoctorCardProps {
  name: string;
  university: string;
  specialty: string;
  experience: string;
  rating: number;
  image: any;
  onPressContinue: () => void;
  onPressDoctorProfile: () => void;
}
