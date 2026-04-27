import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Theme } from '../../../constants/colors';

const BookingDoctorCard = ({ doctor }: any) => {
  return (
    <View style={styles.container}>
      <Image source={doctor.image} style={styles.avatar} />

      <View style={{ flex: 1 }}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.lg,
    // marginHorizontal: Theme.spacing.lg,
    // marginTop: Theme.spacing.lg,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontWeight: Theme.typography.fontWeight.semibold,
    fontSize: Theme.typography.size.body,
  },
  badge: {
    backgroundColor: Theme.colors.background.soft,
    alignSelf: 'flex-start',
    borderRadius: Theme.radius.xl,
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: Theme.spacing.xs,
    marginTop: Theme.spacing.xs,
  },
  badgeText: {
    color: Theme.colors.primary.main,
    fontSize: Theme.typography.size.small,
  },
  rating: {
    marginTop: Theme.spacing.xs,
    color: Theme.colors.text.secondary,
  },
});
