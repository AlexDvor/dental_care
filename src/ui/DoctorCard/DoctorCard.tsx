import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DoctorCardProps } from './DoctorCard.interface';
import { styles } from './DoctorCard.style';
import { Icon } from '../Icon/Icon';

const DoctorCard = ({
  name,
  university,
  specialty,
  experience,
  rating,
  image,
  onPress,
}: DoctorCardProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <View style={styles.left}>
        <Image source={image} style={styles.image} />

        <View style={styles.info}>
          <View style={styles.topRow}>
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>

            <View style={styles.rating}>
              <Icon name="rating" size={14} color="#F2C94C" />
              <Text style={styles.ratingText}>{rating}</Text>
            </View>
          </View>

          <Text style={styles.university} numberOfLines={1}>
            {university}
          </Text>

          <View style={styles.bottomRow}>
            <Text style={styles.badge}>{specialty}</Text>
            <Text style={styles.exp}>{experience}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.arrowBtn}
        onPress={onPress}
        activeOpacity={0.85}
      >
        <Icon name="arrow_r" size={16} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default DoctorCard;
