import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  getMedicationIntakesByUser,
  markMedicationIntakeTaken,
} from '../api/treatmentPlans.api';

export const useMedicationIntakes = (userId?: string) => {
  return useQuery({
    queryKey: ['medication-intakes', userId],
    queryFn: () => {
      if (!userId) {
        throw new Error('Missing user');
      }

      return getMedicationIntakesByUser(userId);
    },
    enabled: !!userId,
    staleTime: 1000 * 60,
  });
};

export const useMarkMedicationIntakeTaken = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markMedicationIntakeTaken,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['medication-intakes', variables.userId],
      });
    },
  });
};
