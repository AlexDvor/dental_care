export type CalendarCardProps = {
  month: string;
  year: number;
  monthIndex: number;

  selectedDay: number;
  onSelectDay: (day: number) => void;

  availableDays?: number[];

  onPrevMonth?: () => void;
  onNextMonth?: () => void;
};
