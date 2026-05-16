import { useCallback, useMemo } from 'react';

import { getMedicationFormLabel } from '../constants/medicationForms';
import {
  MedicationIntake,
  MedicationScheduleItem,
  TreatmentPlan,
} from '../interfaces/medication';
import { getDateKey } from '../utils/Date/getDateKey';
import { parseDateKey } from '../utils/Date/parseDateKey';
import { useAuth } from './useAuth';
import {
  useMarkMedicationIntakeTaken,
  useMedicationIntakes,
} from './useMedicationIntakes';
import { useUserTreatmentPlans } from './useUserTreatmentPlans';

const DAY_IN_MS = 24 * 60 * 60 * 1000;

const addDays = (date: string, days: number) => {
  const nextDate = parseDateKey(date);
  nextDate.setDate(nextDate.getDate() + days);

  return getDateKey(nextDate);
};

const getDaysBetween = (startDate: string, endDate: string) =>
  Math.floor(
    (parseDateKey(endDate).getTime() - parseDateKey(startDate).getTime()) /
      DAY_IN_MS,
  ) + 1;

const getDoseText = (plan: TreatmentPlan) =>
  `${plan.strength} · ${plan.doseAmount} ${getMedicationFormLabel(
    plan.form,
  ).toLowerCase()}`;

const getTreatmentRange = (plans: TreatmentPlan[]) => {
  if (plans.length === 0) {
    const today = getDateKey(new Date());

    return { startDate: today, endDate: today };
  }

  const startDate = plans.reduce(
    (earliest, plan) => (plan.startDate < earliest ? plan.startDate : earliest),
    plans[0].startDate,
  );
  const endDate = plans.reduce(
    (latest, plan) => (plan.endDate > latest ? plan.endDate : latest),
    plans[0].endDate,
  );

  return { startDate, endDate };
};

const buildMedicationSchedule = (
  plans: TreatmentPlan[],
  intakes: MedicationIntake[],
): MedicationScheduleItem[] =>
  plans
    .filter(plan => plan.status === 'active')
    .flatMap(plan => {
      const daysCount = getDaysBetween(plan.startDate, plan.endDate);

      return Array.from({ length: daysCount }).flatMap((_, dayIndex) => {
        const scheduledDate = addDays(plan.startDate, dayIndex);

        return plan.times.map(time => {
          const intake = intakes.find(
            item =>
              item.treatmentPlanId === plan.id &&
              item.scheduledDate === scheduledDate &&
              item.scheduledTime === time,
          );
          const status: MedicationScheduleItem['status'] =
            intake?.status ?? 'pending';

          return {
            id: `${plan.id}-${scheduledDate}-${time}`,
            treatmentPlanId: plan.id,
            scheduledDate,
            scheduledAt: `${scheduledDate}T${time}:00.000Z`,
            name: plan.medicationName,
            dose: getDoseText(plan),
            time,
            taken: status === 'taken',
            form: plan.form,
            status,
          };
        });
      });
    })
    .sort((a, b) => a.scheduledAt.localeCompare(b.scheduledAt));

const getNextMedicationDose = (
  todaySchedule: MedicationScheduleItem[],
  allSchedule: MedicationScheduleItem[],
  today: string,
) =>
  todaySchedule.find(item => !item.taken) ??
  allSchedule.find(item => !item.taken && item.scheduledDate > today) ??
  allSchedule.find(item => !item.taken);

export const useMedicationSchedule = () => {
  const { userProfile } = useAuth();
  const today = getDateKey(new Date());
  const { data: treatmentPlans = [], isLoading: isTreatmentPlansLoading } =
    useUserTreatmentPlans(userProfile?.id);
  const { data: intakes = [], isLoading: isIntakesLoading } =
    useMedicationIntakes(userProfile?.id);
  const markMedicationIntakeTaken = useMarkMedicationIntakeTaken();

  const treatmentRange = useMemo(
    () => getTreatmentRange(treatmentPlans),
    [treatmentPlans],
  );

  const allSchedule = useMemo(
    () => buildMedicationSchedule(treatmentPlans, intakes),
    [intakes, treatmentPlans],
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
