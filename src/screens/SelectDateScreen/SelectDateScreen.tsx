import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import SecurityNote from '../../ui/SecurityNote/SecurityNote';
import { styles } from './SelectDateScreen.style';
import CalendarCard from '../../ui/CalendarCard/CalendarCard';
import TimeSlots from '../../ui/TimeSlots/TimeSlots';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { BookingStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import LayoutAreaView from '../../layout/LayoutAreaView';
import { DOCTORS } from '../../mockData/doctors';

type Route = RouteProp<BookingStackParamList, 'SelectDate'>;

type Navigation = NativeStackNavigationProp<
  BookingStackParamList,
  'DoctorList'
>;

const SelectDateScreen = () => {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();

  const { doctorId, serviceType, totalPrice } = route.params;

  const doctor = DOCTORS.find(d => d.id === doctorId);

  const [day, setDay] = useState<number>(0);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    if (!doctor) return;

    const schedule = doctor.schedule;

    setDay(schedule.availableDays[0]);
    setTime(schedule.availableTimes[0] || '');
  }, [doctor]);

  if (!doctor) return null;

  const schedule = doctor.schedule;

  const handlePressContinue = () => {
    navigation.navigate('BookingConfirm', {
      serviceType,
      totalPrice,
      doctorId,
      date: String(day),
      time,
    });
  };

  return (
    <LayoutAreaView withHeader>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <CalendarCard
            month={schedule.month}
            year={schedule.year}
            monthIndex={schedule.monthIndex}
            availableDays={schedule.availableDays}
            selectedDay={day}
            onSelectDay={setDay}
          />

          <TimeSlots
            times={schedule.availableTimes}
            selected={time}
            onSelect={setTime}
          />
        </ScrollView>

        <View style={styles.bottom}>
          <CustomBtn title="Continue" onPress={handlePressContinue} />
          <SecurityNote />
        </View>
      </View>
    </LayoutAreaView>
  );
};

export default SelectDateScreen;
