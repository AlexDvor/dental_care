import { Text, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import HealthBanner from '../../components/HealthBanner/HealthBanner';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import QuickActionsGrid from '../../components/QuickActionsGrid/QuickActionsGrid';
import StatsCard from '../../components/StatsCard/StatsCard';
import { Theme } from '../../constants/theme';
import ScreenLayout from '../../layout/ScreenLayout';

import { styles } from './HomeScreen.style';

const HEADER_HEIGHT = 220;
const COMPACT_HEADER_HEIGHT = 70;

const HomeScreen = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const largeHeaderAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [HEADER_HEIGHT * 0.55, HEADER_HEIGHT * 0.8],
      [1, 0.7, 0],
      Extrapolation.CLAMP,
    );

    const translateY = interpolate(
      scrollY.value,
      [0, HEADER_HEIGHT],
      [0, -HEADER_HEIGHT],
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      scrollY.value,
      [0, HEADER_HEIGHT],
      [1, 0.96],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
      transform: [{ translateY }, { scale }],
    };
  });

  const compactHeaderAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [60, HEADER_HEIGHT],
      [0, 1],
      Extrapolation.CLAMP,
    );

    const translateY = interpolate(
      scrollY.value,
      [60, HEADER_HEIGHT],
      [-20, 0],
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      scrollY.value,
      [60, HEADER_HEIGHT],
      [0.95, 1],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
      transform: [{ translateY }, { scale }],
    };
  });

  return (
    <ScreenLayout
      statusBarBackgroundColor={Theme.colors.statusBar.secondary}
      statusBarStyle="light-content"
    >
      {/* =========================
          LARGE HEADER
      ========================== */}
      <Animated.View
        style={[styles.largeHeaderContainer, largeHeaderAnimatedStyle]}
      >
        <ProfileHeader />
      </Animated.View>

      {/* =========================
          COMPACT HEADER
      ========================== */}
      <Animated.View
        pointerEvents="none"
        style={[
          styles.compactHeaderContainer,
          compactHeaderAnimatedStyle,
          { height: COMPACT_HEADER_HEIGHT },
        ]}
      >
        <View style={styles.compactHeaderContent}>
          <View style={styles.compactAvatar} />
          <View>
            <Text style={styles.compactTitle}>Alex</Text>
            <Text style={styles.compactSubtitle}>DentalCare</Text>
          </View>
        </View>
      </Animated.View>

      {/* =========================
          SCROLL CONTENT
      ========================== */}
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT + COMPACT_HEADER_HEIGHT,
          paddingBottom: Theme.spacing.massive,
        }}
      >
        <View style={styles.content}>
          <StatsCard />

          <AppointmentCard
            style={{
              marginTop: Theme.spacing.lg,
            }}
          />

          <QuickActionsGrid />

          <HealthBanner />
        </View>
      </Animated.ScrollView>
    </ScreenLayout>
  );
};

export default HomeScreen;
