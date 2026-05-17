export type ReviewRating = 1 | 2 | 3 | 4 | 5;

export type DoctorReview = {
  id: string;
  appointmentId: string;
  userId: string;
  doctorId: string;
  userName: string;
  rating: ReviewRating;
  text: string;
  createdAt: number;
};

export type CreateDoctorReviewPayload = {
  appointmentId: string;
  userId: string;
  doctorId: string;
  userName: string;
  rating: number;
  text: string;
};
