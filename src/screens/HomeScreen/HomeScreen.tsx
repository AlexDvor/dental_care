import { View } from 'react-native';
import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';

const HomeScreen = () => {
  return (
    <View>
      <SectionHeader title="Upcoming Appointment" />
      <AppointmentCard />
    </View>
  );
};

export default HomeScreen;
