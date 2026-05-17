import { parseDateKey } from '../Date/parseDateKey';

// Formats a medication schedule date key for section headings and ranges.
export const formatMedicationDate = (date: string) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
  }).format(parseDateKey(date));
