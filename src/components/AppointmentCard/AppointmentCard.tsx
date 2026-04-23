import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './AppointmentCard.style';
import { Icon } from '../../ui/Icon/Icon';

const AppointmentCard = () => {
  return (
    <View style={styles.container}>
      {/* Top Row */}
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

      {/* Date Row */}
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

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppointmentCard;
