import React from 'react';
import { Text,View } from 'react-native';

import TimeSlotButton from '../TimeSlotButton/TimeSlotButton';
import { TimeSlotsProps } from './TimeSlots.interface';

import { styles } from './TimeSlots.style';

const TimeSlots = ({ times, selected, onSelect }: TimeSlotsProps) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Available Times</Text>
        <Text style={styles.recommended}>★ AI Recommended</Text>
      </View>

      <View style={styles.grid}>
        {times.map(time => (
          <TimeSlotButton
            key={time}
            time={time}
            selected={selected === time}
            recommended={time === '02:00 PM'}
            onPress={() => onSelect(time)}
          />
        ))}
      </View>
    </View>
  );
};

export default TimeSlots;
