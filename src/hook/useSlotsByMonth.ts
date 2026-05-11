import { useQuery } from '@tanstack/react-query';

import { getSlotsByDoctorAndMonth } from '../api/slots.api';

export const useSlotsByMonth = (doctorId?: string, date?: Date) => {
  const start = date
    ? Date.UTC(date.getFullYear(), date.getMonth(), 1, 0, 0, 0)
    : 0;

  const end = date
    ? Date.UTC(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999)
    : 0;

  // console.log('🔍 useSlotsByMonth Query Params:', {
  //   doctorId,
  //   date: date?.toISOString(),
  //   startTimestamp: start,
  //   startDate: new Date(start).toISOString(),
  //   endTimestamp: end,
  //   endDate: new Date(end).toISOString(),
  // });

  return useQuery({
    queryKey: ['slots-month', doctorId, start, end, date],
    queryFn: async () => {
      if (!doctorId || !date) {
        throw new Error('Missing params');
      }

      const result = await getSlotsByDoctorAndMonth(doctorId, start, end);
      // console.log('📥 Fetched slots count:', result.length);
      return result;
    },
    enabled: !!doctorId && !!date,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
