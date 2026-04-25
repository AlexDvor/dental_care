export type TabParamList = {
  HomeTab: undefined;
  BookingTab: undefined;
  ChatTab: undefined;
  ProfileTab: undefined;
};

export type HomeStackParamList = {
  HomeMain: undefined;
};

export type BookingStackParamList = {
  BookingMain: undefined;
  DoctorDetails: { doctorId: string };
};

export type ChatStackParamList = {
  ChatMain: undefined;
};

export type ProfileStackParamList = {
  ProfileMain: undefined;
};
