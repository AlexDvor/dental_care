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
  DoctorList: undefined;

  DoctorProfile: {
    doctorId: string;
  };

  SelectDate: {
    doctorId: string;
  };

  BookingConfirm: {
    doctorId: string;
    date: string;
    time: string;
  };
};

export type ChatStackParamList = {
  ChatMain: undefined;
};

export type ProfileStackParamList = {
  ProfileMain: undefined;
};
