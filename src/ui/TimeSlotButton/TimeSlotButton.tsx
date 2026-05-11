// src/ui/TimeSlotButton/TimeSlotButton.tsx
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { TimeSlotButtonProps } from './TimeSlotButton.interface';

import { styles } from './TimeSlotButton.style';

const TimeSlotButton = ({
  time,
  selected,
  recommended,
  onPress,
}: TimeSlotButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        selected && styles.active,
        recommended && styles.recommended,
      ]}
    >
      <Text style={[styles.text, selected && styles.textActive]}>
        {time.label} {recommended ? '★' : ''}
      </Text>
    </TouchableOpacity>
  );
};

export default TimeSlotButton;
