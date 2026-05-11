import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { Theme } from '../../constants/theme';
import { Icon } from '../../ui/Icon/Icon';
import { MedicationReminderProps } from './MedicationReminder.interface';

import { styles } from './MedicationReminder.style';

export function MedicationReminder({
  taken = 2,
  total = 3,
  nextDoseName = 'Amoxicillin',
  nextDoseTime = '14:00',
  onPress,
  style,
}: MedicationReminderProps) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * (total > 0 ? taken / total : 0);

  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
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
          <Icon name="arrow_r" color={Theme.colors.icon.secondary} />
        </View>

        <View style={styles.doseRow}>
          <View style={styles.pillWrapper}>
            <Image
              style={styles.image}
              source={require('../../assets/images/pill.png')}
            />
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
