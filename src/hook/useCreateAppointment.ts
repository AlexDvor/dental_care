import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createAppointment } from '../api/appointments.api';

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAppointment,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['slots-month'],
      });
      queryClient.invalidateQueries({
        queryKey: ['user-appointments'],
      });
    },
  });
};
