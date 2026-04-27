import { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';

import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import SecurityNote from '../../ui/SecurityNote/SecurityNote';
import { styles } from './SelectDateScreen.style';
import CalendarCard from '../../ui/CalendarCard/CalendarCard';
import TimeSlots from '../../ui/TimeSlots/TimeSlots';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { BookingStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import LayoutAreaView from '../../layout/LayoutAreaView';
import { useDoctorById } from '../../hook/useDoctorById';

type Route = RouteProp<BookingStackParamList, 'SelectDate'>;

type Navigation = NativeStackNavigationProp<
  BookingStackParamList,
  'DoctorList'
>;

const SelectDateScreen = () => {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();

  const { doctorId, serviceType, totalPrice } = route.params;

  const { data: doctor, loading, error } = useDoctorById(doctorId);

  const [day, setDay] = useState<number>(0);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    if (!doctor) return;

    const schedule = doctor.schedule;

    setDay(schedule.availableDays[0]);
    setTime(schedule.availableTimes[0] || '');
  }, [doctor]);

  if (loading) {
    return (
      <LayoutAreaView withHeader>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size={40} />
        </View>
      </LayoutAreaView>
    );
  }

  if (error) {
    return (
      <LayoutAreaView withHeader>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>{error}</Text>
        </View>
      </LayoutAreaView>
    );
  }

  if (!doctor) return null;

  const schedule = doctor.schedule;

  const handlePressContinue = () => {
    navigation.navigate('BookingConfirm', {
      serviceType,
      totalPrice,
      doctorData: doctor,
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
