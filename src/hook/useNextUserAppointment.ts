import { useQuery } from '@tanstack/react-query';

import { getNextUserAppointment } from '../api/appointments.api';

export const useNextUserAppointment = (userId?: string) => {
  return useQuery({
    queryKey: ['next-user-appointment', userId],
    queryFn: () => {
      if (!userId) {
        throw new Error('Missing user');
      }

      return getNextUserAppointment(userId);
    },
    enabled: !!userId,
    staleTime: 1000 * 60,
    retry: 1,
  });
};
