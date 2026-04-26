import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './ReviewItem.style';

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
