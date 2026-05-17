import { useQuery } from '@tanstack/react-query';

import { getUserAppointments } from '../api/appointments.api';
import { getNextUpcomingAppointment } from '../utils/Appointment/appointmentSort';

export const useNextUserAppointment = (userId?: string) => {
  return useQuery({
    queryKey: ['user-appointments', userId],
    queryFn: () => {
      if (!userId) {
        throw new Error('Missing user');
      }

      return getUserAppointments(userId);
    },
    select: getNextUpcomingAppointment,
    enabled: !!userId,
    staleTime: 1000 * 60,
    retry: 1,
  });
};
