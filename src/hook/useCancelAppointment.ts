import { useMutation, useQueryClient } from '@tanstack/react-query';

import { cancelAppointment } from '../api/appointments.api';

export const useCancelAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelAppointment,
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
