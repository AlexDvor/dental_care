import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './CalendarCard.style';
import { Icon } from '../Icon/Icon';
import { CalendarCardProps } from './CalendarCard.interface';

const WEEK_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const CalendarCard = ({
  month,
  year,
  monthIndex,
  availableDays,
  selectedDay,
  onSelectDay,
}: CalendarCardProps) => {
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const calendarDays = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.month}>{month}</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.arrow}>
            <Icon name="arrow_l" size={13} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrow}>
            <Icon name="arrow_r" size={13} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.weekRow}>
        {WEEK_DAYS.map((day, index) => (
          <Text key={`${day}-${index}`} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>

      <View style={styles.grid}>
        {calendarDays.map((day, index) => {
          if (!day) {
            return <View key={`${day}-${index}`} style={styles.day} />;
          }

          const isAvailable = availableDays.includes(day);

          return (
            <TouchableOpacity
              key={`day-${day}-${index}`}
              disabled={!isAvailable}
              style={styles.day}
              onPress={() => onSelectDay(day)}
            >
              <View
                style={[
                  styles.dayInner,
                  selectedDay === day && styles.dayActive,
                  !isAvailable && styles.dayDisabled,
                ]}
              >
                <Text
                  style={[
                    styles.dayText,
                    selectedDay === day && styles.dayTextActive,
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
