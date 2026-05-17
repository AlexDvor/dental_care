import { MedicationType } from '../../interfaces/medication';

export type MedicationItemProps = {
  item: MedicationType;
  index: number;
  isLast: boolean;
  previousTaken: boolean;
  onTaken: (id: string) => void;
};
