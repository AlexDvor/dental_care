export interface TimeSlotsProps {
  times: string[];
  selected: string;
  onSelect: (time: string) => void;
}
