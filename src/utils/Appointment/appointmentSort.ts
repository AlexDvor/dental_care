import { Appointment } from '../../interfaces/appointment.types';

// Sorts appointments from newest to oldest by start time.
export const sortAppointmentsByNewest = (
  appointments: Appointment[],
): Appointment[] => [...appointments].sort((a, b) => b.startTime - a.startTime);

// Finds the next future appointment that is still upcoming.
export const getNextUpcomingAppointment = (
  appointments: Appointment[],
  now = Date.now(),
): Appointment | null =>
  appointments
    .filter(appointment => appointment.status === 'upcoming')
    .filter(appointment => appointment.startTime >= now)
    .sort((a, b) => a.startTime - b.startTime)[0] ?? null;
