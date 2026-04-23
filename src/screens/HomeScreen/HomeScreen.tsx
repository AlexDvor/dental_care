import { View } from 'react-native';
import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import QuickActionCard from '../../ui/QuickActionCard/QuickActionCard';
import { Theme } from '../../constants/colors';
import PromoBanner from '../../components/PromoBanner/PromoBanner';

const HomeScreen = () => {
  return (
    <View>
      <SectionHeader title="Upcoming Appointment" />
      <AppointmentCard style={{ marginBottom: Theme.spacing.md }} />
      <SectionHeader title="Quick Actions" />
      <View style={{ flexDirection: 'row', gap: Theme.spacing.md }}>
        <QuickActionCard
          title="Book Appointment"
          icon="schedule"
          onPress={() => {}}
          iconBackground="#E8F3ED"
          iconColor={Theme.colors.primary.main}
        />

        <QuickActionCard
          title="Find Doctor"
          icon="findDoctor"
          onPress={() => {}}
          iconBackground="#EAF2FF"
          iconColor="#3B82F6"
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: Theme.spacing.md,
          marginTop: Theme.spacing.md,
        }}
      >
        <QuickActionCard
          title="Chat Support"
          icon="chat"
          onPress={() => {}}
          iconBackground="#F3E8FF"
          iconColor="#8B5CF6"
        />

        <QuickActionCard
          title="View Records"
          icon="viewRecords"
          onPress={() => {}}
          iconBackground="#E6FFFA"
          iconColor="#14B8A6"
        />
      </View>
      <PromoBanner
        title="Cleaning Reminder"
        description="It's been 6 months since your last cleaning."
        buttonText="Book Cleaning"
        onPress={() => {}}
        expiresIn={86400} // 1 день
      />
    </View>
  );
};

export default HomeScreen;
