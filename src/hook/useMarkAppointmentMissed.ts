import { useMutation, useQueryClient } from '@tanstack/react-query';

import { markAppointmentMissed } from '../api/appointments.api';

export const useMarkAppointmentMissed = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markAppointmentMissed,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user-appointments'],
      });
    },
  });
};
