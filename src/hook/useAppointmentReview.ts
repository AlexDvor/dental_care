import { useQuery } from '@tanstack/react-query';

import { getReviewByAppointment } from '../api/doctorReviews.api';

export const useAppointmentReview = (
  appointmentId?: string,
  userId?: string,
) => {
  return useQuery({
    queryKey: ['appointment-review', appointmentId, userId],
    queryFn: () => {
      if (!appointmentId || !userId) {
        throw new Error('Missing review params');
      }

      return getReviewByAppointment(appointmentId, userId);
    },
    enabled: !!appointmentId && !!userId,
    staleTime: 1000 * 60,
  });
};
