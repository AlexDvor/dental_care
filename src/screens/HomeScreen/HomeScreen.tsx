import { View } from 'react-native';
import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import QuickActionCard from '../../ui/QuickActionCard/QuickActionCard';
import { Theme } from '../../constants/colors';

const HomeScreen = () => {
  return (
    <View>
      <SectionHeader title="Upcoming Appointment" />
      <AppointmentCard />
      <SectionHeader title="Quick Actions" />
      <View style={{ flexDirection: 'row', gap: Theme.spacing.md }}>
        <QuickActionCard
          title="Book Appointment"
          icon="arrow_r"
          onPress={() => console.log('Book')}
        />

        <QuickActionCard
          title="Find Doctor"
          icon="location"
          onPress={() => console.log('Doctor')}
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
          icon="rating"
          onPress={() => console.log('Chat')}
        />

        <QuickActionCard
          title="View Records"
          icon="schedule"
          onPress={() => console.log('Records')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
