import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DoctorCardProps } from './DoctorCard.interface';
import { styles } from './DoctorCard.style';
import { Icon } from '../Icon/Icon';

const DoctorCard = ({
  doctor,
  onPressContinue,
  onPressDoctorProfile,
}: DoctorCardProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onPressDoctorProfile}
    >
      <View style={styles.left}>
        <Image
          source={require('../../assets/images/doctor.jpg')}
          style={styles.image}
        />

        <View style={styles.info}>
          <View style={styles.topRow}>
            <Text style={styles.name} numberOfLines={1}>
              {doctor.name}
            </Text>

            <View style={styles.rating}>
              <Icon name="rating" size={14} color="#F2C94C" />
              <Text style={styles.ratingText}>{doctor.rating}</Text>
            </View>
          </View>

          <Text style={styles.university} numberOfLines={1}>
            {doctor.education.university}
          </Text>

          <View style={styles.bottomRow}>
            <Text style={styles.badge}>{doctor.specialty}</Text>
            <Text style={styles.exp}>{`${doctor.experience} years exp.`}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.arrowBtn}
        onPress={onPressContinue}
        activeOpacity={0.85}
      >
        <Icon name="arrow_r" size={16} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default DoctorCard;
