import { useQuery } from '@tanstack/react-query';

import { getUserAppointments } from '../api/appointments.api';

export const useUserAppointments = (userId?: string) => {
  return useQuery({
    queryKey: ['user-appointments', userId],
    queryFn: () => {
      if (!userId) {
        throw new Error('Missing user');
      }

      return getUserAppointments(userId);
    },
    enabled: !!userId,
    staleTime: 1000 * 60,
    retry: 1,
  });
};
