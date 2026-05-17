import { useQuery } from '@tanstack/react-query';

import { getVisitRecordByAppointment } from '../api/visitRecords.api';

export const useVisitRecord = (appointmentId?: string, userId?: string) => {
  return useQuery({
    queryKey: ['visit-record', appointmentId, userId],
    queryFn: () => {
      if (!appointmentId || !userId) {
        throw new Error('Missing visit params');
      }

      return getVisitRecordByAppointment(appointmentId, userId);
    },
    enabled: !!appointmentId && !!userId,
    staleTime: 1000 * 60,
  });
};
