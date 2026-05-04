import { useQuery } from '@tanstack/react-query';

import { getAppointmentsByDoctorAndDate } from '../api/appointments.api';

export const useAppointmentsByMonth = (doctorId?: string, date?: Date) => {
  const start = date
    ? new Date(date.getFullYear(), date.getMonth(), 1).getTime()
    : 0;

  const end = date
    ? new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0,
        23,
        59,
        59,
        999,
      ).getTime()
    : 0;

  // eslint-disable-next-line @tanstack/query/exhaustive-deps
  return useQuery({
    queryKey: ['appointments-month', doctorId, start],
    queryFn: () => {
      if (!doctorId || !date) throw new Error('Missing params');
      return getAppointmentsByDoctorAndDate(doctorId, start, end);
    },
    enabled: !!doctorId && !!date,
    staleTime: 1000 * 60 * 5,
  });
};
