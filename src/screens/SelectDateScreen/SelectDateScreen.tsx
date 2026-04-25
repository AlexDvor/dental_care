import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import SecurityNote from '../../ui/SecurityNote/SecurityNote';
import { styles } from './SelectDateScreen.style';
import CalendarCard from '../../ui/CalendarCard/CalendarCard';
import TimeSlots from '../../ui/TimeSlots/TimeSlots';

const mockCalendar = {
  month: 'April 2026',
  year: 2026,
  monthIndex: 3,
  availableDays: [10, 11, 12, 15, 16, 18, 20, 22, 25],
  availableTimes: [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
  ],
};

const SelectDateScreen = () => {
  const [day, setDay] = useState(15);
  const [time, setTime] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <CalendarCard
          month={mockCalendar.month}
          year={mockCalendar.year}
          monthIndex={mockCalendar.monthIndex}
          availableDays={mockCalendar.availableDays}
          selectedDay={day}
          onSelectDay={setDay}
        />

        <TimeSlots
          times={mockCalendar.availableTimes}
          selected={time}
          onSelect={setTime}
        />
      </ScrollView>

      <View style={styles.bottom}>
        <CustomBtn
          title="Confirm Booking"
          onPress={() => {}}
          style={styles.btnWrapper}
          textStyle={styles.btnText}
        />
        <SecurityNote />
      </View>
    </View>
  );
};

export default SelectDateScreen;
