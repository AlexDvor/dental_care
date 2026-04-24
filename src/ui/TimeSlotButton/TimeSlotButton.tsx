import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './TimeSlotButton.style';
import { TimeSlotButtonProps } from './TimeSlotButton.interface';

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
        {time} {recommended ? '★' : ''}
      </Text>
    </TouchableOpacity>
  );
};

export default TimeSlotButton;
