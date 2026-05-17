// Formats an appointment timestamp for compact appointment cards.
export const formatAppointmentDate = (timestamp: number) => {
  const appointmentDate = new Date(timestamp);
  const today = new Date();

  if (appointmentDate.toDateString() === today.toDateString()) {
    return 'Today';
  }

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
  }).format(appointmentDate);
};
