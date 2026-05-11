import { useQuery } from '@tanstack/react-query';

import { getDoctorById } from '../api/doctors.api';
import { DoctorType } from '../interfaces/doctor.types';

export const useDoctorById = (id?: string) => {
  return useQuery<DoctorType>({
    queryKey: ['doctor', id],
    queryFn: () => getDoctorById(id as string),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 хв
    retry: 1,
  });
};
