export type ReviewProps = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
};

export type Schedule = {
  month: string;
  year: number;
  monthIndex: number;
  availableDays: number[];
  availableTimes: string[];
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

export type DoctorType = {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;

  image: string;
  about: string;
  education: Education;
  stats: StatsProps;
  schedule: Schedule;

  reviews: ReviewProps[];
};
