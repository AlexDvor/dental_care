import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Theme } from '../../../constants/colors';

const ReviewItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.name}>Emily R.</Text>
            <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
          </View>
        </View>

        <Text style={styles.time}>2 weeks ago</Text>
      </View>

      <Text style={styles.text}>
        Dr. Sarah is amazing! Very professional and explained everything
        clearly.
      </Text>
    </View>
  );
};
export default ReviewItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.lg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontWeight: Theme.typography.fontWeight.medium,
  },
  stars: {
    marginTop: 2,
  },
  time: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.caption,
  },
  text: {
    marginTop: Theme.spacing.md,
    color: Theme.colors.text.secondary,
  },
});
