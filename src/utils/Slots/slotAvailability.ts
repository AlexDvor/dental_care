import { SlotType } from '../../api/slots.api';

// Returns the available day numbers for a month of appointment slots.
export const getAvailableSlotDays = (slots: SlotType[], now = Date.now()) => {
  const daysSet = new Set<number>();

  slots.forEach(slot => {
    if (!slot.isBooked && slot.startTime > now) {
      const slotDate = new Date(slot.startTime);
      daysSet.add(slotDate.getDate());
    }
  });

  return Array.from(daysSet);
};

// Returns unbooked future slots that belong to the selected calendar date.
export const getAvailableSlotsForDate = (
  slots: SlotType[],
  selectedDate: Date,
  now = Date.now(),
) => {
  const startOfDayUTC = Date.UTC(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate(),
    0,
    0,
    0,
  );
  const endOfDayUTC = Date.UTC(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate() + 1,
    0,
    0,
    0,
  );

  return slots.filter(
    slot =>
      slot.startTime >= startOfDayUTC &&
      slot.startTime < endOfDayUTC &&
      slot.startTime > now &&
      !slot.isBooked,
  );
};

// Returns the Firestore timestamp range for the month after the given date.
export const getNextMonthSlotRange = (date: Date) => {
  const next = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  const start = Date.UTC(next.getFullYear(), next.getMonth(), 1);
  const end = Date.UTC(
    next.getFullYear(),
    next.getMonth() + 1,
    0,
    23,
    59,
    59,
    999,
  );

  return { start, end };
};
