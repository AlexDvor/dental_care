export interface TimeSlotButtonProps {
  time: string;
  selected?: boolean;
  recommended?: boolean;
  onPress: () => void;
}
