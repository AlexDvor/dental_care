import React from 'react';
import { View, Text, Image } from 'react-native';
import { DOCTORS } from '../../../mockData/doctors';

import { styles } from './DoctorHeader.style';

const DoctorHeader = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={DOCTORS[0].image}
        style={styles.image}
        resizeMode="cover"
        borderRadius={10}
      />

      <View style={styles.card}>
        <Text style={styles.name}>Dr. Sarah Johnson</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>Orthodontist</Text>
        </View>

        <View style={styles.ratingWrapper}>
          <Text style={styles.rating}>⭐ 4.9 </Text>
          <Text style={styles.review}>(120 reviews)</Text>
        </View>
      </View>
    </View>
  );
};

export default DoctorHeader;
