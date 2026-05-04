import { useQuery } from '@tanstack/react-query';

import { getAppointmentsByDoctorAndDate } from '../api/appointments.api';

export const useAppointments = (doctorId?: string, date?: Date) => {
  const start = date
    ? new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        0,
        0,
        0,
        0,
      ).getTime()
    : 0;

  const end = date
    ? new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        23,
        59,
        59,
        999,
      ).getTime()
    : 0;

  // eslint-disable-next-line @tanstack/query/exhaustive-deps
  return useQuery({
    queryKey: ['appointments', doctorId, start],
    queryFn: () => {
      if (!doctorId || !date) {
        throw new Error('Missing params');
      }

      return getAppointmentsByDoctorAndDate(doctorId, start, end);
    },
    enabled: !!doctorId && !!date,
    staleTime: 0,
  });
};
