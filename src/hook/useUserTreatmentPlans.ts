import { useQuery } from '@tanstack/react-query';

import { getTreatmentPlansByUser } from '../api/treatmentPlans.api';

export const useUserTreatmentPlans = (userId?: string) => {
  return useQuery({
    queryKey: ['treatment-plans', userId],
    queryFn: () => {
      if (!userId) {
        throw new Error('Missing user');
      }

      return getTreatmentPlansByUser(userId);
    },
    enabled: !!userId,
    staleTime: 1000 * 60,
  });
};
