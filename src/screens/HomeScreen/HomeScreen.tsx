import React from 'react';
import { Image, Text, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import HealthBanner from '../../components/HealthBanner/HealthBanner';
import { MedicationReminder } from '../../components/MedicationReminder/MedicationReminder';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import QuickActionsGrid from '../../components/QuickActionsGrid/QuickActionsGrid';
import StatsCard from '../../components/StatsCard/StatsCard';
import { Theme } from '../../constants/theme';
import { useAuth } from '../../hook/useAuth';
import { useMedicationSchedule } from '../../hook/useMedicationSchedule';
import ScreenLayout from '../../layout/ScreenLayout';
import { HomeStackParamList } from '../../navigation/types';
import TrustBlock from '../../ui/TrustBlock/TrustBlock';

import { styles } from './HomeScreen.style';

const HEADER_HEIGHT = 220;
const COMPACT_HEADER_HEIGHT = 70;

const trustBlockItems = [
  {
    icon: 'trustVerified',
    label: 'Verified',
    subLabel: 'Trusted & Secure',
    bg: Theme.colors.background.main,
    color: Theme.colors.icon.primary,
  },
  {
    icon: 'trustEncrypted',
    label: 'Encrypted',
    subLabel: 'Data Protection',
    bg: Theme.colors.background.main,
    color: Theme.colors.icon.blue,
  },
  {
    icon: 'trustTopTier',
    label: 'Top Tier',
    subLabel: 'Premium Quality',
    bg: Theme.colors.background.main,
    color: Theme.colors.icon.purple,
  },
] satisfies Array<{
  icon: 'trustVerified' | 'trustEncrypted' | 'trustTopTier';
  label: string;
  subLabel: string;
  bg: string;
  color: string;
}>;

type Navigation = NativeStackNavigationProp<
  HomeStackParamList,
  'MedicationsList'
>;

const HomeScreen = () => {
  const navigation = useNavigation<Navigation>();
  const { nextDose, todayProgress } = useMedicationSchedule();
  const { userProfile } = useAuth();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const largeHeaderAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [HEADER_HEIGHT * 0.6, HEADER_HEIGHT * 0.82],
      [1, 0],
      Extrapolation.CLAMP,
    );

    const translateY = interpolate(
      scrollY.value,
      [0, HEADER_HEIGHT],
      [0, -(HEADER_HEIGHT + 40)],
      Extrapolation.CLAMP,
    );

    const shadowOpacity = interpolate(
      scrollY.value,
      [HEADER_HEIGHT * 0.75, HEADER_HEIGHT],
      [0, 0.06],
      Extrapolation.CLAMP,
    );

    const elevation = interpolate(
      scrollY.value,
      [HEADER_HEIGHT * 0.75, HEADER_HEIGHT],
      [0, 8],
      Extrapolation.CLAMP,
    );

    return {
      opacity,

      transform: [{ translateY }],
      shadowOpacity,
      elevation,
    };
  });

  const compactHeaderAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [HEADER_HEIGHT * 0.68, HEADER_HEIGHT],
      [0, 1],
      Extrapolation.CLAMP,
    );

    const translateY = interpolate(
      scrollY.value,
      [HEADER_HEIGHT * 0.68, HEADER_HEIGHT],
      [-16, 0],
      Extrapolation.CLAMP,
    );

    const shadowOpacity = interpolate(
      scrollY.value,
      [HEADER_HEIGHT * 0.75, HEADER_HEIGHT],
      [0, 0.06],
      Extrapolation.CLAMP,
    );

    const elevation = interpolate(
      scrollY.value,
      [HEADER_HEIGHT * 0.75, HEADER_HEIGHT],
      [0, 8],
      Extrapolation.CLAMP,
    );

    return {
      opacity,

      elevation,

      shadowOpacity,

      transform: [{ translateY }],
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
        renderToHardwareTextureAndroid
        style={[styles.largeHeaderContainer, largeHeaderAnimatedStyle]}
      >
        <ProfileHeader
          name={userProfile?.firstName || ''}
          fullName={userProfile?.fullName || ''}
          email={userProfile?.email || ''}
        />
      </Animated.View>

      {/* =========================
          COMPACT HEADER
      ========================== */}
      <Animated.View
        pointerEvents="none"
        style={[
          styles.compactHeaderContainer,
          compactHeaderAnimatedStyle,
          {
            height: COMPACT_HEADER_HEIGHT,
          },
        ]}
      >
        <View style={styles.compactHeaderContent}>
          {/* <View style={styles.compactAvatar} /> */}

          <Image
            source={require('../../assets/images/doctor.jpg')}
            style={styles.compactAvatar}
          />

          <View>
            <Text style={styles.compactTitle}>{userProfile?.fullName}</Text>

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

          <MedicationReminder
            taken={todayProgress.taken}
            total={todayProgress.total}
            nextDose={nextDose}
            onPress={() => navigation.navigate('MedicationsList')}
            style={{
              marginTop: Theme.spacing.lg,
            }}
          />

          <QuickActionsGrid
            style={{
              marginTop: Theme.spacing.lg,
            }}
          />

          <HealthBanner
            style={{
              marginTop: Theme.spacing.lg,
            }}
          />

          <TrustBlock
            items={[...trustBlockItems]}
            brandName="DentalCare"
            description="Premium dental care simplified."
            onPrivacyPress={() => {}}
            onTermsPress={() => {}}
          />
        </View>
      </Animated.ScrollView>
    </ScreenLayout>
  );
};

export default HomeScreen;
