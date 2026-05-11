export interface TimeSlotItem {
  label: string;
  id: string;
  startTime: number;
}

export interface TimeSlotButtonProps {
  time: TimeSlotItem;
  selected?: boolean;
  recommended?: boolean;
  onPress: () => void;
}
