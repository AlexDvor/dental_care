import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import HealthBanner from '../../components/HealthBanner/HealthBanner';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import QuickActionsGrid from '../../components/QuickActionsGrid/QuickActionsGrid';
import StatsCard from '../../components/StatsCard/StatsCard';
import { Theme } from '../../constants/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent />

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false} // прибирає білий “відскок” на iOS
      >
        <HomeHeader />

        <View style={styles.content}>
          <StatsCard />

          <AppointmentCard style={{ marginTop: Theme.spacing.lg }} />

          <QuickActionsGrid />

          <HealthBanner />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.primary,
  },

  content: {
    paddingHorizontal: Theme.spacing.lg,
    paddingBottom: Theme.spacing.massive,
    marginTop: 20,
  },
});
