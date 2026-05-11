import React from 'react';
import { Text,View } from 'react-native';

import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import { Icon } from '../../ui/Icon/Icon';
import { AppointmentCardProps } from './AppointmentCard.interface';

import { styles } from './AppointmentCard.style';

const AppointmentCard = ({ style }: AppointmentCardProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.topRow}>
        <View style={styles.leftSection}>
          <View style={styles.iconWrapper}>
            <Icon name="schedule" size={25} color={'#0E7A4B'} />
          </View>

          <View style={styles.textBlock}>
            <Text style={styles.title}>Regular Checkup</Text>
            <Text style={styles.subtitle}>Dr. Sarah Johnson</Text>
          </View>
        </View>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>Today</Text>
        </View>
      </View>

      <View style={styles.dateRow}>
        <View style={styles.dateItem}>
          <Icon name="schedule" size={16} color={'#6B7280'} />
          <Text style={styles.dateText}>Apr 9, 2026</Text>
        </View>

        <View style={styles.dateItem}>
          <Icon name="schedule" size={16} color={'#6B7280'} />
          <Text style={styles.dateText}>10:30 AM</Text>
        </View>
      </View>

      <CustomBtn
        title="View Details"
        onPress={() => {}}
        style={{ marginTop: 20 }}
        type="secondary"
      />
    </View>
  );
};

export default AppointmentCard;
