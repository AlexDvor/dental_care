export type ReviewProps = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
};

export type Education = {
  university: string;
  period: string;
  degree: string;
};

export type StatsProps = {
  patients: number;
  satisfaction: number;
};

export type WorkingHoursProps = {
  start: string;
  end: string;
};

export type DoctorType = {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  slotDuration: number;
  image: string;
  about: string;
  education: Education;
  stats: StatsProps;
  workingHours: WorkingHoursProps;
  reviews: ReviewProps[];
};
