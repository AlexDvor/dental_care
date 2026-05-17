import { useMutation, useQueryClient } from '@tanstack/react-query';

import { markAppointmentCompleted } from '../api/appointments.api';

export const useMarkAppointmentCompleted = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markAppointmentCompleted,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-appointments'],
      });
    },
  });
};
