import {
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';

import { DoctorType } from '../interfaces/doctor.types';

export type TabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList> | undefined;
  BookingTab: NavigatorScreenParams<BookingStackParamList> | undefined;
  ChatTab: NavigatorScreenParams<ChatStackParamList> | undefined;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList> | undefined;
};

export type HomeStackParamList = {
  HomeMain: undefined;
  MedicationsList: undefined;
};

export type BookingStackParamList = {
  ServiceList: undefined;

  DoctorList: {
    serviceType: string[];
    totalPrice: number;
  };

  DoctorProfile: {
    doctorId: string;
    serviceType: string[];
    totalPrice: number;
  };

  SelectDate: {
    doctorId: string;
    serviceType: string[];
    totalPrice: number;
  };

  BookingConfirm: {
    doctorData: DoctorType;
    date: string;
    time: string;
    serviceType: string[];
    totalPrice: number;
    slotId: string;
    startTime: number;
    endTime: number;
  };
};

export type ChatStackParamList = {
  ChatMain: undefined;
};

export type ProfileStackParamList = {
  ProfileMain: undefined;
  VisitHistory: undefined;
  VisitDetails: {
    appointmentId: string;
  };
};

export type RootStackParamList = {
  AppointmentOnboarding: undefined;
  SmileCareOnboarding: undefined;
  Register: undefined;
  OtpVerification: undefined;
  Login: undefined;
  MainTabs: undefined;
};

export type AppParamList = RootStackParamList &
  TabParamList &
  HomeStackParamList &
  BookingStackParamList &
  ChatStackParamList &
  ProfileStackParamList;

export type AppNavigation = NavigationProp<AppParamList>;

export type RootNav = NavigationProp<TabParamList & RootStackParamList>;
