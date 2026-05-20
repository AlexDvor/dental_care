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
import TrustBlock from '../../ui/TrustBlock/TrustBlock';
import { getAppointmentStatusCounts } from '../../utils/Appointment/appointmentFilters';
import { formatAppointmentDate } from '../../utils/Date/formatAppointmentDate';
import { formatAppointmentTime } from '../../utils/Date/formatAppointmentTime';

import { styles } from './HomeScreen.style';

const HEADER_HEIGHT = 220;

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

    const counts = getAppointmentStatusCounts(appointments);

    return {
      visitsCount: counts.completed,
      upcomingCount: counts.upcoming,
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

      <Animated.View
        pointerEvents="none"
        style={[
          styles.compactHeaderContainer,
          compactHeaderAnimatedStyle,
          styles.compactHeaderHeight,
        ]}
      >
        <View style={styles.compactHeaderContent}>
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

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.scrollContent}
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
              style={styles.sectionSpacing}
            />
          ) : (
            <EmptyAppointmentCard
              onPress={() => navigation.navigate('BookingTab')}
              style={styles.sectionSpacing}
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
            style={styles.sectionSpacing}
          />

          <QuickActionsGrid style={styles.sectionSpacing} />

          <HealthBanner style={styles.sectionSpacing} />

          <TrustBlock
            items={[...trustBlockItems]}
            brandName="DentalCare"
            description="Premium dental care simplified."
            onPrivacyPress={() => {}}
            onTermsPress={() => {}}
          />

          {/* <CustomBtn
            title="Send Slots"
            onPress={() => {
              seedSlots({ days: 3 });
            }}
          /> */}

          {/* <CustomBtn
            title="Send Treatments For Appointments ID"
            onPress={() => {
              seedAppointmentTreatment({
                userId: userProfile?.id || 'fff',
                appointmentId: 'Xcfv7l9Q2vQgnK7PI3ux',
                treatmentCase: 'postExtractionInflammation',
                startDate: new Date(),
                actorId: userProfile?.id || 'fff',
              });
            }}
          /> */}
        </View>
      </Animated.ScrollView>
    </ScreenLayout>
  );
};

export default HomeScreen;
