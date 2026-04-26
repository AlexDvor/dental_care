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
    doctorId: string;
    date: string;
    time: string;
    serviceType: string[];
    totalPrice: number;
  };
};

export type ChatStackParamList = {
  ChatMain: undefined;
};

export type ProfileStackParamList = {
  ProfileMain: undefined;
};
