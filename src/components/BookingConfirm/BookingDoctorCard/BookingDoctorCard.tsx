import React from 'react';
import { Image,Text, View } from 'react-native';

import { styles } from './BookingDoctorCard.styles';

const BookingDoctorCard = ({ doctor }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/doctor.jpg')}
        style={styles.avatar}
      />

      <View style={styles.nameWrapper}>
        <Text style={styles.name}>{doctor.name}</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{doctor.specialty}</Text>
        </View>

        <Text style={styles.rating}>
          ⭐ {doctor.rating} ({doctor.reviewsCount} reviews)
        </Text>
      </View>
    </View>
  );
};

export default BookingDoctorCard;
