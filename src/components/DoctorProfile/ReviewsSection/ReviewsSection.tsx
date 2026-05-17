import React, { useRef, useState } from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { Theme } from '../../../constants/theme';
import ReviewItem from '../ReviewItem/ReviewItem';
import { ReviewsSectionProps } from './ReviewsSection.interface';

import { styles } from './ReviewsSection.style';

const { width } = Dimensions.get('window');

const ITEM_WIDTH = width * 0.8;
const SPACING = Theme.spacing.md;
const reviewCardStyle: ViewStyle = { width: ITEM_WIDTH, marginRight: SPACING };

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  const scrollRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (ITEM_WIDTH + SPACING));
    setActiveIndex(index);
  };

  if (!reviews || reviews.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Patient Reviews (0)</Text>
        </View>

        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No reviews yet</Text>

          <Text style={styles.emptySubText}>
            Patients haven’t shared their experience
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={styles.title}
        >{`Patient Reviews (${reviews.length})`}</Text>
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
          <View key={index} style={reviewCardStyle}>
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
