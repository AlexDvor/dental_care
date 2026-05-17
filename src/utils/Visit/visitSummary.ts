import { VisitRecord } from '../../interfaces/visit.types';

export type VisitSummaryItem =
  | {
      label: 'Diagnosis' | 'Procedures' | 'Doctor notes';
      value: string;
    }
  | {
      label: 'Teeth';
      value: string[];
    };

// Builds the ordered treatment summary items shown in visit details.
export const getVisitSummaryItems = (
  visitRecord?: VisitRecord | null,
): VisitSummaryItem[] => [
  {
    label: 'Diagnosis',
    value: visitRecord?.diagnosis || 'No diagnosis recorded yet.',
  },
  {
    label: 'Procedures',
    value: visitRecord?.procedures?.join(', ') || 'No procedures recorded yet.',
  },
  {
    label: 'Teeth',
    value: visitRecord?.toothNumbers || [],
  },
  {
    label: 'Doctor notes',
    value: visitRecord?.notes || 'No notes recorded yet.',
  },
];
