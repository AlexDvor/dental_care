export interface CalendarCardProps {
  month: string;
  year: number;
  monthIndex: number;
  availableDays: number[];
  selectedDay: number;
  onSelectDay: (day: number) => void;
}
