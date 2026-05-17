// Formats a timestamp as a 24-hour HH:mm time string.
export const formatTime = (timestamp: number) => {
  const d = new Date(timestamp);
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};
