import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { getMedicationFormIcon } from '../../constants/medicationForms';
import { Theme } from '../../constants/theme';
import { Icon } from '../../ui/Icon/Icon';
import { MedicationReminderProps } from './MedicationReminder.interface';

import { styles } from './MedicationReminder.style';

const CheckIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 12.5l4.5 4.5L19 7.5"
      stroke="#FFFFFF"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export function MedicationReminder({
  taken = 0,
  total = 0,
  nextDose,
  onPress,
  style,
}: MedicationReminderProps) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * (total > 0 ? taken / total : 0);
  const isCompletedToday = total > 0 && taken >= total;

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
          <View style={styles.headerText}>
            <Text style={styles.title}>Medication Reminder</Text>
            <Text style={styles.subtitle}>Stay on track with your health</Text>
          </View>
          <Icon name="arrow_r" color={Theme.colors.icon.secondary} />
        </View>

        {(isCompletedToday || nextDose) && (
          <View style={styles.doseRow}>
            {isCompletedToday ? (
              <View style={styles.completedIconWrapper}>
                <CheckIcon />
              </View>
            ) : (
              nextDose && (
                <View style={styles.pillWrapper}>
                  <Image
                    style={styles.image}
                    source={getMedicationFormIcon(nextDose.form)}
                  />
                </View>
              )
            )}

            <View style={styles.doseContent}>
              <Text style={styles.doseLabel}>
                {isCompletedToday ? 'Well done' : 'Next dose'}
              </Text>
              <Text style={styles.doseValue} numberOfLines={1}>
                {isCompletedToday
                  ? "Today's medication tasks are complete"
                  : `${nextDose?.name} · ${nextDose?.time}`}
              </Text>
              {!isCompletedToday && nextDose && (
                <Text style={styles.doseMeta} numberOfLines={1}>
                  {nextDose.dose}
                </Text>
              )}
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
