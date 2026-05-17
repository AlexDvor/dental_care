// Formats an appointment timestamp for visit history cards.
export const formatVisitDate = (timestamp: number) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(timestamp));

// Formats an appointment timestamp as a visit time label.
export const formatVisitTime = (timestamp: number) =>
  new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(timestamp));

// Formats an appointment timestamp for the visit details header.
export const formatVisitDateTime = (timestamp: number) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(timestamp));
