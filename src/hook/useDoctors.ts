import { useQuery } from '@tanstack/react-query';

import { getDoctors } from '../api/doctors.api';
import { DoctorType } from '../interfaces/doctor.types';

export const useDoctors = () => {
  return useQuery<DoctorType[]>({
    queryKey: ['doctors'],
    queryFn: getDoctors,
    staleTime: 1000 * 60 * 5, // 5 хв кеш
    retry: 1,
    // select: data => data.filter(d => d.rating > 4),
  });
};
