import {
  Appointment,
  AppointmentStatus,
} from '../../interfaces/appointment.types';

export type AppointmentStatusFilter = AppointmentStatus | 'all';

// Counts appointments for each status and for the all-status filter.
export const getAppointmentStatusCounts = (appointments: Appointment[]) =>
  appointments.reduce<Record<AppointmentStatusFilter, number>>(
    (counts, appointment) => {
      counts.all += 1;
      counts[appointment.status] += 1;

      return counts;
    },
    {
      all: 0,
      upcoming: 0,
      completed: 0,
      cancelled: 0,
      missed: 0,
    },
  );

// Returns appointments matching the selected status filter.
export const filterAppointmentsByStatus = (
  appointments: Appointment[],
  status: AppointmentStatusFilter,
) =>
  status === 'all'
    ? appointments
    : appointments.filter(appointment => appointment.status === status);

// Formats a persisted appointment status for a user-facing badge.
export const getAppointmentStatusLabel = (status: AppointmentStatus) => {
  if (status === 'missed') {
    return 'Missed';
  }

  return status;
};
