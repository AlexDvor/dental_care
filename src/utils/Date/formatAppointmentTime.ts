// Formats an appointment timestamp as a localized time label.
export const formatAppointmentTime = (timestamp: number) =>
  new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(timestamp));
