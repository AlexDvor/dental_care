import React from 'react';
import { Image, Text, View } from 'react-native';

import { Theme } from '../../constants/theme';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import { Icon } from '../../ui/Icon/Icon';
import { EmptyAppointmentCardProps } from './EmptyAppointmentCard.interface';

import { styles } from './EmptyAppointmentCard.style';

export const EmptyAppointmentCard = ({
  style,
  onPress,
}: EmptyAppointmentCardProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.headerRow}>
        <View style={styles.iconWrapper}>
          <Icon
            name="schedule"
            size={24}
            color={Theme.colors.icon.primary}
          />
        </View>

        <Text style={styles.headerTitle}>No Upcoming Appointment</Text>
      </View>

      <View style={styles.contentRow}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>Plan your next visit</Text>
          <Text style={styles.subtitle}>
            Book a dental checkup at a time that works for you.
          </Text>
        </View>

        <View style={styles.calendarPanel}>
          <Image
            source={require('../../assets/images/upcoming_calendar.png')}
            style={styles.calendarImage}
          />
        </View>
      </View>

      <CustomBtn
        title="Book Appointment"
        onPress={onPress || (() => {})}
        type="primary"
        icon="arrow_r"
        iconPosition="right"
        style={styles.button}
      />
    </View>
  );
};
