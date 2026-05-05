import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createAppointment } from '../api/appointments.api';

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAppointment,

    onSuccess: (_, variables) => {
      // 🔥 інвалідимо кеш (місяць)
      const date = new Date(variables.startTime);
      const start = new Date(date.getFullYear(), date.getMonth(), 1).getTime();

      queryClient.invalidateQueries({
        queryKey: ['appointments-month', variables.doctorId, start],
      });
    },
  });
};
