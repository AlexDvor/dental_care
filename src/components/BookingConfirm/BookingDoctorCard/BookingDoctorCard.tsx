import React from 'react';
import { Image, Text, View } from 'react-native';

import { DoctorType } from '../../../interfaces/doctor.types';

import { styles } from './BookingDoctorCard.styles';

interface BookingDoctorCardProps {
  doctor: DoctorType;
}

const BookingDoctorCard = ({ doctor }: BookingDoctorCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: doctor.image }} style={styles.avatar} />

      <View style={styles.nameWrapper}>
        <Text style={styles.name}>{doctor.name}</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{doctor.specialty}</Text>
        </View>

        <Text style={styles.rating}>
          {doctor.rating} ({doctor.reviews.length} reviews)
        </Text>
      </View>
    </View>
  );
};

export default BookingDoctorCard;
