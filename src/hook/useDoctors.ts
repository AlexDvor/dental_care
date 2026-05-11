import { useQuery } from '@tanstack/react-query';

import { getDoctors } from '../api/doctors.api';
import { DoctorType } from '../interfaces/doctor.types';

export const useDoctors = () => {
  return useQuery<DoctorType[]>({
    queryKey: ['doctors'],
    queryFn: getDoctors,
    // select: data => data.filter(d => d.rating > 4),
  });
};
