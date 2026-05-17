import { useQuery } from '@tanstack/react-query';

import { getTreatmentPlansByAppointment } from '../api/treatmentPlans.api';

export const useAppointmentTreatmentPlans = (
  appointmentId?: string,
  userId?: string,
) => {
  return useQuery({
    queryKey: ['appointment-treatment-plans', appointmentId, userId],
    queryFn: () => {
      if (!appointmentId || !userId) {
        throw new Error('Missing treatment params');
      }

      return getTreatmentPlansByAppointment(appointmentId, userId);
    },
    enabled: !!appointmentId && !!userId,
    staleTime: 1000 * 60,
  });
};
