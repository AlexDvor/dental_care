import { useQuery } from '@tanstack/react-query';

import { getSlotsByDoctorAndMonth } from '../api/slots.api';

export const useSlotsByMonth = (doctorId?: string, date?: Date) => {
  const start = date ? Date.UTC(date.getFullYear(), date.getMonth(), 1) : 0;

  const end = date
    ? Date.UTC(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999)
    : 0;

  return useQuery({
    queryKey: ['slots-month', doctorId, start, end],
    queryFn: () => getSlotsByDoctorAndMonth(doctorId!, start, end),
    enabled: !!doctorId && !!date,
    staleTime: 1000 * 60 * 5,
  });
};
