export type TimeSlot = {
  start: number;
  end: number;
};

export const generateTimeSlots = ({
  date,
  start,
  end,
  slotDuration,
}: {
  date: Date;
  start: string; // "09:00"
  end: string; // "17:00"
  slotDuration: number; // minutes
}): TimeSlot[] => {
  const slots: TimeSlot[] = [];

  const [startHour, startMin] = start.split(':').map(Number);
  const [endHour, endMin] = end.split(':').map(Number);

  const startDate = new Date(date);
  startDate.setHours(startHour, startMin, 0, 0);

  const endDate = new Date(date);
  endDate.setHours(endHour, endMin, 0, 0);

  let current = new Date(startDate);

  while (current < endDate) {
    const slotStart = current.getTime();
    const slotEnd = slotStart + slotDuration * 60 * 1000;

    if (slotEnd > endDate.getTime()) break;

    slots.push({
      start: slotStart,
      end: slotEnd,
    });

    current = new Date(slotEnd);
  }

  return slots;
};
