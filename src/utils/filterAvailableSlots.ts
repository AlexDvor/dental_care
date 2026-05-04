import { TimeSlot } from './generateTimeSlots';

type Appointment = {
  startTime: number;
  endTime: number;
};

export const filterAvailableSlots = (
  slots: TimeSlot[],
  appointments: Appointment[],
): TimeSlot[] => {
  return slots.filter(slot => {
    return !appointments.some(appt => {
      return slot.start < appt.endTime && slot.end > appt.startTime;
    });
  });
};
