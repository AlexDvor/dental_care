import { TimeSlot } from './generateTimeSlots';

type AppointmentType = {
  startTime: number;
  endTime: number;
};

export const filterAvailableSlots = (
  slots: TimeSlot[],
  appointments: AppointmentType[],
): TimeSlot[] => {
  return slots.filter(slot => {
    return !appointments.some((appt: AppointmentType) => {
      return slot.start < appt.endTime && slot.end > appt.startTime;
    });
  });
};
