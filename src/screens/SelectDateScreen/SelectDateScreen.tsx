import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import SecurityNote from '../../ui/SecurityNote/SecurityNote';
import { styles } from './SelectDateScreen.style';
import CalendarCard from '../../ui/CalendarCard/CalendarCard';
import TimeSlots from '../../ui/TimeSlots/TimeSlots';
import { mockCalendar } from '../../mockData/calendar';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { BookingStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LayoutAreaView from '../../layout/LayoutAreaView';

type Route = RouteProp<BookingStackParamList, 'SelectDate'>;

type Navigation = NativeStackNavigationProp<
  BookingStackParamList,
  'DoctorList'
>;

const SelectDateScreen = () => {
  const [day, setDay] = useState(15);
  const [time, setTime] = useState('');
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();
  const { doctorId, serviceType, totalPrice } = route.params;

  const handlePressContinue = () => {
    navigation.navigate('BookingConfirm', {
      serviceType,
      totalPrice,
      doctorId,
      date: String(day),
      time,
    });

    console.log({
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
            title="Continue"
            onPress={() => handlePressContinue()}
            style={styles.btnWrapper}
            textStyle={styles.btnText}
          />
          <SecurityNote />
        </View>
      </View>
    </LayoutAreaView>
  );
};

export default SelectDateScreen;
