import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '../../../constants/colors';
import ReviewItem from '../ReviewItem/ReviewItem';

const ReviewsSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Patient Reviews (120)</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ReviewItem />

      {/* dots */}
      <View style={styles.dots}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

export default ReviewsSection;

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },
  title: {
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },
  seeAll: {
    color: Theme.colors.primary.main,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Theme.spacing.md,
    gap: Theme.spacing.xs,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D1D5DB',
  },
  activeDot: {
    backgroundColor: Theme.colors.primary.main,
  },
});
