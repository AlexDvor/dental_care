import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createDoctorReview } from '../api/doctorReviews.api';

export const useCreateDoctorReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createDoctorReview,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['appointment-review', variables.appointmentId, variables.userId],
      });
      queryClient.invalidateQueries({
        queryKey: ['doctor-reviews', variables.doctorId],
      });
    },
  });
};
