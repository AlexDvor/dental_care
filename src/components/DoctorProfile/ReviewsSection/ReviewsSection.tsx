import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
} from 'react-native';
import { Theme } from '../../../constants/colors';
import ReviewItem from '../ReviewItem/ReviewItem';

const { width } = Dimensions.get('window');

const ITEM_WIDTH = width * 0.8;
const SPACING = Theme.spacing.md;

const ReviewsSection = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (ITEM_WIDTH + SPACING));
    setActiveIndex(index);
  };

  const reviews = [1, 2, 3];

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
        {reviews.map((_, index) => (
          <View key={index} style={{ width: ITEM_WIDTH, marginRight: SPACING }}>
            <ReviewItem />
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

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
    paddingHorizontal: Theme.spacing.lg,
  },

  title: {
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },

  seeAll: {
    color: Theme.colors.primary.main,
  },

  scrollContent: {
    paddingLeft: Theme.spacing.lg,
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
