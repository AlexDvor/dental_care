import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { Theme } from '../../constants/theme';

import { styles } from './MedicationReminder.style';

type Props = {
  taken?: number;
  total?: number;
  nextDoseName?: string;
  nextDoseTime?: string;
  onPress?: () => void;
};

export function MedicationReminder({
  taken = 2,
  total = 3,
  nextDoseName = 'Amoxicillin',
  nextDoseTime = '14:00',
  onPress,
}: Props) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * (total > 0 ? taken / total : 0);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.ringWrap}>
        <Svg
          width={112}
          height={112}
          viewBox="0 0 100 100"
          style={{ transform: [{ rotate: '-90deg' }] }}
        >
          <Circle
            cx="50"
            cy="50"
            r={radius}
            stroke={Theme.colors.icon.accentSoftGreen}
            strokeOpacity={0.2}
            strokeWidth={8}
            fill="none"
          />
          <Circle
            cx="50"
            cy="50"
            r={radius}
            stroke={Theme.colors.icon.primary}
            strokeWidth={8}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
          />
        </Svg>
        <View style={styles.ringCenter}>
          <Text>
            <Text style={styles.ringBig}>{taken}</Text>
            <Text style={styles.ringSmall}> of </Text>
            <Text style={styles.ringBig}>{total}</Text>
          </Text>
          <Text style={styles.ringCaption}>taken today</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Medication Reminder</Text>
            <Text style={styles.subtitle}>Stay on track with your health</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </View>

        <View style={styles.doseRow}>
          <View style={styles.pillIcon}>
            <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
              <Path
                d="M10.5 20.5a7 7 0 0 1-9.9-9.9l9.9-9.9a7 7 0 0 1 9.9 9.9l-9.9 9.9ZM8.5 8.5l7 7"
                stroke={Theme.colors.icon.primary}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.doseLabel}>Next dose</Text>
            <Text style={styles.doseValue} numberOfLines={1}>
              {nextDoseName} · {nextDoseTime}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
