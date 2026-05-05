export interface TimeSlotItem {
  label: string;
  id: string;
  startTime: number;
}

export interface TimeSlotsProps {
  times: TimeSlotItem[];
  selected: string | null;
  onSelect: (id: string) => void;
}
