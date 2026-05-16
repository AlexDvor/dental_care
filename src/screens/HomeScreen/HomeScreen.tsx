import React, { useMemo } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { NavigationProp, useNavigation } from '@react-navigation/native';

import { seedAppointmentTreatment } from '../../api/seedAppointmentTreatment';
import { seedSlots } from '../../api/seedSlots';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import { EmptyAppointmentCard } from '../../components/EmptyAppointmentCard/EmptyAppointmentCard';
import HealthBanner from '../../components/HealthBanner/HealthBanner';
import { MedicationReminder } from '../../components/MedicationReminder/MedicationReminder';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import QuickActionsGrid from '../../components/QuickActionsGrid/QuickActionsGrid';
import StatsCard from '../../components/StatsCard/StatsCard';
import { Theme } from '../../constants/theme';
import { trustBlockItems } from '../../constants/trustBlockItems';
import { useAuth } from '../../hook/useAuth';
import { useMedicationSchedule } from '../../hook/useMedicationSchedule';
import { useNextUserAppointment } from '../../hook/useNextUserAppointment';
import { useUserAppointments } from '../../hook/useUserAppointments';
import ScreenLayout from '../../layout/ScreenLayout';
import {
  HomeStackParamList,
  RootStackParamList,
  TabParamList,
} from '../../navigation/types';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import TrustBlock from '../../ui/TrustBlock/TrustBlock';
import { formatAppointmentDate } from '../../utils/Date/formatAppointmentDate';
import { formatAppointmentTime } from '../../utils/Date/formatAppointmentTime';

import { styles } from './HomeScreen.style';

const HEADER_HEIGHT = 220;
const COMPACT_HEADER_HEIGHT = 70;

type Navigation = NavigationProp<
  HomeStackParamList & TabParamList & RootStackParamList
>;

const HomeScreen = () => {
  const navigation = useNavigation<Navigation>();
  const { hasActiveTreatmentPlan, nextDose, todayProgress } =
    useMedicationSchedule();
  const { userProfile } = useAuth();
  const {
    data: nextAppointment,
    isLoading: isNextAppointmentLoading,
    isError: isNextAppointmentError,
  } = useNextUserAppointment(userProfile?.id);
  const {
    data: appointments,
    isLoading: isAppointmentsLoading,
    isError: isAppointmentsError,
  } = useUserAppointments(userProfile?.id);

  const { visitsCount, upcomingCount } = useMemo(() => {
    if (isAppointmentsError || !appointments) {
      return {
        visitsCount: 0,
        upcomingCount: 0,
      };
    }

    return {
      visitsCount: appointments.filter(
        appointment => appointment.status === 'completed',
      ).length,
      upcomingCount: appointments.filter(
        appointment => appointment.status === 'upcoming',
      ).length,
    };
  }, [appointments, isAppointmentsError]);

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
          <StatsCard
            visitsCount={visitsCount}
            upcomingCount={upcomingCount}
            isLoading={isAppointmentsLoading}
          />
          {isNextAppointmentLoading ? (
            <View style={styles.appointmentLoader}>
              <ActivityIndicator />
            </View>
          ) : nextAppointment && !isNextAppointmentError ? (
            <AppointmentCard
              doctorName={nextAppointment.doctorName}
              doctorImage={nextAppointment.doctorImage}
              serviceType={nextAppointment.serviceType}
              dateLabel={formatAppointmentDate(nextAppointment.startTime)}
              timeLabel={formatAppointmentTime(nextAppointment.startTime)}
              onPress={() => navigation.navigate('VisitHistory')}
              style={{
                marginTop: Theme.spacing.lg,
              }}
            />
          ) : (
            <EmptyAppointmentCard
              onPress={() => navigation.navigate('BookingTab')}
              style={{
                marginTop: Theme.spacing.lg,
              }}
            />
          )}

          <MedicationReminder
            hasActiveTreatmentPlan={hasActiveTreatmentPlan}
            taken={todayProgress.taken}
            total={todayProgress.total}
            nextDose={nextDose}
            onPress={
              hasActiveTreatmentPlan
                ? () => navigation.navigate('MedicationsList')
                : undefined
            }
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
          {/* Teстові дані }
          
          {/* <CustomBtn
            title="Go "
            onPress={async () => {
              try {
                await seedAppointmentTreatment({
                  userId: userProfile?.id || 'ReFCryvPhLOxbTGWBBCPjms6DhF2',
                  appointmentId: '39TbiuYTSHIsu4sU1l8e',
                  treatmentCase: 'acuteGingivitis',
                  actorId: userProfile?.id || 'ReFCryvPhLOxbTGWBBCPjms6DhF2',
                  startDate: new Date(),
                });

                console.log('Seeded appointment treatment');
              } catch (error) {
                console.log(error);
              }
            }}
          /> */}
        </View>
      </Animated.ScrollView>
    </ScreenLayout>
  );
};

export default HomeScreen;
