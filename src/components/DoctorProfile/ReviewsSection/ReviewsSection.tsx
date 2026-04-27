import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
} from 'react-native';
import { Theme } from '../../../constants/colors';
import ReviewItem from '../ReviewItem/ReviewItem';

import { styles } from './ReviewsSection.style';
import { ReviewsSectionProps } from './ReviewsSection.interface';

const { width } = Dimensions.get('window');

const ITEM_WIDTH = width * 0.8;
const SPACING = Theme.spacing.md;

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  const scrollRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (ITEM_WIDTH + SPACING));
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Patient Reviews (120)</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + SPACING}
        decelerationRate="fast"
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
      >
        {reviews.map((item, index) => (
          <View key={index} style={{ width: ITEM_WIDTH, marginRight: SPACING }}>
            <ReviewItem item={item} />
          </View>
        ))}
      </ScrollView>

      <View style={styles.dots}>
        {reviews.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activeIndex && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default ReviewsSection;
