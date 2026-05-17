const DAY_IN_MS = 24 * 60 * 60 * 1000;
const HOUR_IN_MS = 60 * 60 * 1000;

// Calculates cancellation and refund cutoff timestamps for an appointment.
export const getAppointmentPolicyDates = (startTime: number) => ({
  refundEligibleUntil: startTime - 7 * DAY_IN_MS,
  cancelAllowedUntil: startTime - 48 * HOUR_IN_MS,
});
