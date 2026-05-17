import { getMedicationFormLabel } from '../../constants/medicationForms';
import {
  MedicationIntake,
  MedicationScheduleItem,
  TreatmentPlan,
} from '../../interfaces/medication';
import { getDateKey } from '../Date/getDateKey';
import { parseDateKey } from '../Date/parseDateKey';

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const DOSE_SEPARATOR = '\u00b7';

// Returns only treatment plans that are currently active.
export const getActiveTreatmentPlans = (plans: TreatmentPlan[]) =>
  plans.filter(plan => plan.status === 'active');

// Checks whether at least one treatment plan is active.
export const hasActiveTreatmentPlans = (plans: TreatmentPlan[]) =>
  getActiveTreatmentPlans(plans).length > 0;

// Adds calendar days to a YYYY-MM-DD date key.
export const addDays = (date: string, days: number) => {
  const nextDate = parseDateKey(date);
  nextDate.setDate(nextDate.getDate() + days);

  return getDateKey(nextDate);
};

// Counts calendar days between two medication date keys.
export const getDaysBetween = (startDate: string, endDate: string) =>
  Math.floor(
    (parseDateKey(endDate).getTime() - parseDateKey(startDate).getTime()) /
      DAY_IN_MS,
  ) + 1;

// Builds the readable medication dose label for a treatment plan.
export const getDoseText = (plan: TreatmentPlan) =>
  `${plan.strength} ${DOSE_SEPARATOR} ${plan.doseAmount} ${getMedicationFormLabel(
    plan.form,
  ).toLowerCase()}`;

// Returns the earliest start date and latest end date from treatment plans.
export const getTreatmentRange = (plans: TreatmentPlan[]) => {
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

// Builds all scheduled medication doses for the active treatment plans.
export const buildMedicationSchedule = (
  plans: TreatmentPlan[],
  intakes: MedicationIntake[],
): MedicationScheduleItem[] =>
  plans
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

// Finds the next untaken medication dose from a schedule.
export const getNextMedicationDose = (
  todaySchedule: MedicationScheduleItem[],
  allSchedule: MedicationScheduleItem[],
  today: string,
) =>
  todaySchedule.find(item => !item.taken) ??
  allSchedule.find(item => !item.taken && item.scheduledDate > today) ??
  allSchedule.find(item => !item.taken);
