import React from 'react';
import { Image, Text, View } from 'react-native';

import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import { Icon } from '../../ui/Icon/Icon';
import { AppointmentCardProps } from './AppointmentCard.interface';

import { styles } from './AppointmentCard.style';

const AppointmentCard = ({ style, onPress }: AppointmentCardProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.headerRow}>
        <View style={styles.iconWrapper}>
          <Icon name="schedule" size={25} color="#0E7A4B" />
        </View>

        <Text style={styles.headerTitle}>Next Appointment</Text>
      </View>

      <View style={styles.contentRow}>
        <View style={styles.infoColumn}>
          <View style={styles.doctorRow}>
            <Image
              source={require('../../assets/images/doctor.jpg')}
              style={styles.avatar}
            />

            <View style={styles.doctorTextBlock}>
              <Text style={styles.doctorName}>Dr. Sarah Johnson</Text>
              <Text style={styles.appointmentType}>Regular Checkup</Text>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.timeRow}>
            <Icon name="schedule" size={32} color="#0E7A4B" />

            <View style={styles.timeTextBlock}>
              <Text style={styles.dateLabel}>Today</Text>
              <Text style={styles.timeText}>10:30 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.calendarPanel}>
          <Image
            source={require('../../assets/images/calendar.png')}
            style={styles.calendarImage}
          />
        </View>
      </View>

      <CustomBtn
        title="View Appointment"
        onPress={onPress || (() => {})}
        type="primary"
        icon="arrow_r"
        iconPosition="right"
        style={styles.button}
      />
    </View>
  );
};

export default AppointmentCard;
