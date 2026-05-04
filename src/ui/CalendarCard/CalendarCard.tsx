import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Icon } from '../Icon/Icon';
import { CalendarCardProps } from './CalendarCard.interface';

import { styles } from './CalendarCard.style';

const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const isSameDate = (y: number, m: number, d: number) => {
  const today = new Date();
  return (
    today.getFullYear() === y && today.getMonth() === m && today.getDate() === d
  );
};

const isPastDate = (y: number, m: number, d: number) => {
  const today = new Date();
  const date = new Date(y, m, d);
  return (
    date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
  );
};

const CalendarCard = ({
  month,
  year,
  monthIndex,
  selectedDay,
  availableDays = [],
  onSelectDay,
  onPrevMonth,
  onNextMonth,
}: CalendarCardProps) => {
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const calendarDays = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.month}>{month}</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.arrow} onPress={onPrevMonth}>
            <Icon name="arrow_l" size={13} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.arrow} onPress={onNextMonth}>
            <Icon name="arrow_r" size={13} />
          </TouchableOpacity>
        </View>
      </View>

      {/* WEEK */}
      <View style={styles.weekRow}>
        {WEEK_DAYS.map((day, index) => (
          <Text key={`${day}-${index}`} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>

      {/* GRID */}
      <View style={styles.grid}>
        {calendarDays.map((day, index) => {
          if (!day) {
            return <View key={`empty-${index}`} style={styles.day} />;
          }

          const isSelected = selectedDay === day;
          const today = isSameDate(year, monthIndex, day);
          const past = isPastDate(year, monthIndex, day);

          const isAvailable =
            !past &&
            (availableDays.length === 0 || availableDays.includes(day));

          return (
            <TouchableOpacity
              key={`day-${day}-${index}`}
              style={styles.day}
              disabled={!isAvailable}
              onPress={() => onSelectDay(day)}
            >
              <View
                style={[
                  styles.dayInner,
                  isSelected && styles.dayActive,
                  today && styles.dayToday,
                  !isAvailable && styles.dayDisabled,
                ]}
              >
                <Text
                  style={[
                    styles.dayText,
                    isSelected && styles.dayTextActive,
                    today && styles.dayTextToday,
                    !isAvailable && styles.dayTextDisabled,
                  ]}
                >
                  {day}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CalendarCard;
