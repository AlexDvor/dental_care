import { useCallback, useMemo } from 'react';

import { getDateKey } from '../utils/Date/getDateKey';
import {
  buildMedicationSchedule,
  getActiveTreatmentPlans,
  getDaysBetween,
  getNextMedicationDose,
  getTreatmentRange,
} from '../utils/Medication/medicationSchedule';
import { useAuth } from './useAuth';
import {
  useMarkMedicationIntakeTaken,
  useMedicationIntakes,
} from './useMedicationIntakes';
import { useUserTreatmentPlans } from './useUserTreatmentPlans';

export const useMedicationSchedule = () => {
  const { userProfile } = useAuth();
  const today = getDateKey(new Date());
  const { data: treatmentPlans = [], isLoading: isTreatmentPlansLoading } =
    useUserTreatmentPlans(userProfile?.id);
  const { data: intakes = [], isLoading: isIntakesLoading } =
    useMedicationIntakes(userProfile?.id);
  const markMedicationIntakeTaken = useMarkMedicationIntakeTaken();

  const activeTreatmentPlans = useMemo(
    () => getActiveTreatmentPlans(treatmentPlans),
    [treatmentPlans],
  );
  const hasActiveTreatmentPlan = activeTreatmentPlans.length > 0;

  const treatmentRange = useMemo(
    () => getTreatmentRange(activeTreatmentPlans),
    [activeTreatmentPlans],
  );

  const allSchedule = useMemo(
    () => buildMedicationSchedule(activeTreatmentPlans, intakes),
    [activeTreatmentPlans, intakes],
  );

  const todaySchedule = useMemo(
    () => allSchedule.filter(item => item.scheduledDate === today),
    [allSchedule, today],
  );

  const nextDose = useMemo(
    () => getNextMedicationDose(todaySchedule, allSchedule, today),
    [allSchedule, today, todaySchedule],
  );

  const todayProgress = useMemo(
    () => ({
      taken: todaySchedule.filter(item => item.taken).length,
      total: todaySchedule.length,
    }),
    [todaySchedule],
  );

  const treatmentDays = getDaysBetween(
    treatmentRange.startDate,
    treatmentRange.endDate,
  );
  const currentTreatmentDay = Math.min(
    Math.max(getDaysBetween(treatmentRange.startDate, today), 1),
    treatmentDays,
  );
  const treatmentProgress = Math.round(
    (currentTreatmentDay / treatmentDays) * 100,
  );

  const markAsTaken = useCallback(
    (id: string) => {
      if (!userProfile) {
        return;
      }

      const scheduleItem = allSchedule.find(item => item.id === id);

      if (!scheduleItem) {
        return;
      }

      markMedicationIntakeTaken.mutate({
        userId: userProfile.id,
        treatmentPlanId: scheduleItem.treatmentPlanId,
        scheduledDate: scheduleItem.scheduledDate,
        scheduledTime: scheduleItem.time,
        scheduledAt: scheduleItem.scheduledAt,
      });
    },
    [allSchedule, markMedicationIntakeTaken, userProfile],
  );

  return {
    allSchedule,
    currentTreatmentDay,
    hasActiveTreatmentPlan,
    isLoading: isTreatmentPlansLoading || isIntakesLoading,
    markAsTaken,
    nextDose,
    today,
    todayProgress,
    todaySchedule,
    treatmentDays,
    treatmentProgress,
    treatmentRange,
  };
};
