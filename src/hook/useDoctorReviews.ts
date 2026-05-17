import { useQuery } from '@tanstack/react-query';

import { getDoctorReviews } from '../api/doctorReviews.api';

export const useDoctorReviews = (doctorId?: string) => {
  return useQuery({
    queryKey: ['doctor-reviews', doctorId],
    queryFn: () => {
      if (!doctorId) {
        throw new Error('Missing doctor');
      }

      return getDoctorReviews(doctorId);
    },
    enabled: !!doctorId,
    staleTime: 1000 * 60,
  });
};
