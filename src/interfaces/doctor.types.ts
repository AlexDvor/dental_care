import { ImageSourcePropType } from 'react-native';

export type Review = {
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

export type Stats = {
  patients: number;
  satisfaction: number;
};

export type DoctorType = {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;

  image: ImageSourcePropType;
  about: string;
  education: Education;
  stats: Stats;
  schedule: Schedule;

  reviews: Review[];
};
