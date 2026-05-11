import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { styles } from './MedicationItem.style';

const colors = {
  background: '#F4FAF6',
  foreground: '#1B2A22',
  card: '#FFFFFF',
  border: '#E3ECE6',
  medicalGreen: '#2E9E6B',
  medicalGreenSoft: '#E6F5EC',
  medicalGreenForeground: '#FFFFFF',
  white70: 'rgba(255,255,255,0.7)',
  mutedText: 'rgba(27,42,34,0.7)',
  arrow: 'rgba(27,42,34,0.4)',
};

const PillIcon = ({ color = colors.medicalGreen }: { color?: string }) => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
    <Path
      d="M10.5 3.5a5 5 0 0 1 7.07 7.07l-7.07 7.07a5 5 0 1 1-7.07-7.07l7.07-7.07Z"
      stroke={color}
      strokeWidth={1.8}
    />
    <Path d="M7 7l10 10" stroke={color} strokeWidth={1.8} />
  </Svg>
);

const CheckIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 12.5l4.5 4.5L19 7.5"
      stroke="#FFFFFF"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export type Med = {
  id: string;
  name: string;
  dose: string;
  time: string;
  taken: boolean;
};

type MedicationItemProps = {
  item: Med;
  onToggle: (id: string) => void;
};

export const MedicationItem = memo(
  ({ item, onToggle }: MedicationItemProps) => (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => onToggle(item.id)}
      style={[styles.item, item.taken && styles.itemTaken]}
    >
      <View style={[styles.iconWrap, item.taken && styles.iconWrapTaken]}>
        <PillIcon />
      </View>

      <View style={styles.itemContent}>
        <Text style={[styles.itemName, item.taken && styles.itemNameTaken]}>
          {item.name}
        </Text>

        <Text style={styles.itemMeta}>
          {item.dose} · {item.time}
        </Text>
      </View>

      <View style={[styles.checkbox, item.taken && styles.checkboxChecked]}>
        {item.taken && <CheckIcon />}
      </View>
    </TouchableOpacity>
  ),
);
