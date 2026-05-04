import { useMemo, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useQueryClient } from '@tanstack/react-query';

import { getAppointmentsByDoctorAndDate } from '../../api/appointments.api';
import { useAppointmentsByMonth } from '../../hook/useAppointmentsByMonth';
import { useDoctorById } from '../../hook/useDoctorById';
import LayoutAreaView from '../../layout/LayoutAreaView';
import { BookingStackParamList } from '../../navigation/types';
import CalendarCard from '../../ui/CalendarCard/CalendarCard';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import SecurityNote from '../../ui/SecurityNote/SecurityNote';
import SubTitle from '../../ui/SubTitle/SubTitle';
import TimeSlots from '../../ui/TimeSlots/TimeSlots';
import { filterAvailableSlots } from '../../utils/filterAvailableSlots';
import { generateTimeSlots } from '../../utils/generateTimeSlots';

import { styles } from './SelectDateScreen.style';

type Route = RouteProp<BookingStackParamList, 'SelectDate'>;

type Navigation = NativeStackNavigationProp<
  BookingStackParamList,
  'DoctorList'
>;

const formatTime = (timestamp: number) => {
  const d = new Date(timestamp);
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

const SelectDateScreen = () => {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();
  const queryClient = useQueryClient();

  const { doctorId, serviceType, totalPrice } = route.params;

  const { data: doctor, isLoading, error } = useDoctorById(doctorId);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  // 👉 appointments (місяць)
  const { data: appointments = [], isLoading: isMonthLoading } =
    useAppointmentsByMonth(doctorId, selectedDate);

  // 🔥 PREFETCH наступного місяця
  const prefetchNextMonth = (date: Date) => {
    if (!doctorId) return;

    const next = new Date(date.getFullYear(), date.getMonth() + 1, 1);

    const start = new Date(next.getFullYear(), next.getMonth(), 1).getTime();

    const end = new Date(
      next.getFullYear(),
      next.getMonth() + 1,
      0,
      23,
      59,
      59,
      999,
    ).getTime();

    queryClient.prefetchQuery({
      queryKey: ['appointments-month', doctorId, start],
      queryFn: () => getAppointmentsByDoctorAndDate(doctorId, start, end),
    });
  };

  // 👉 available days
  const availableDays = useMemo(() => {
    if (!doctor) return [];

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const result: number[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);

      const slots = generateTimeSlots({
        date,
        start: doctor.workingHours.start,
        end: doctor.workingHours.end,
        slotDuration: doctor.slotDuration,
      });

      const free = filterAvailableSlots(slots, appointments);

      if (free.length > 0) {
        result.push(day);
      }
    }

    return result;
  }, [doctor, selectedDate, appointments]);

  // 👉 slots
  const availableSlots = useMemo(() => {
    if (!doctor) return [];

    const slots = generateTimeSlots({
      date: selectedDate,
      start: doctor.workingHours.start,
      end: doctor.workingHours.end,
      slotDuration: doctor.slotDuration,
    });

    return filterAvailableSlots(slots, appointments);
  }, [doctor, selectedDate, appointments]);

  // 👉 UI
  const formattedTimes = useMemo(() => {
    return availableSlots.map(slot => ({
      label: formatTime(slot.start),
      value: slot.start,
    }));
  }, [availableSlots]);

  if (isLoading) {
    return (
      <LayoutAreaView withHeader>
        <View style={styles.center}>
          <ActivityIndicator size={40} />
        </View>
      </LayoutAreaView>
    );
  }

  if (error) {
    return (
      <LayoutAreaView withHeader>
        <View style={styles.center}>
          <Text>{error.message}</Text>
        </View>
      </LayoutAreaView>
    );
  }

  if (!doctor) return null;

  const handlePressContinue = () => {
    if (!selectedSlot) return;

    const slot = availableSlots.find(s => s.start === selectedSlot);

    if (!slot) {
      setSelectedSlot(null);
      return;
    }

    navigation.navigate('BookingConfirm', {
      serviceType,
      totalPrice,
      doctorData: doctor,
      date: selectedDate.toISOString(),
      time: formatTime(slot.start),
      startTime: slot.start,
      endTime: slot.end,
    });
  };

  return (
    <LayoutAreaView withHeader>
      <View style={styles.container}>
        <SubTitle title="Select date and time for your appointment" />

        <ScrollView contentContainerStyle={styles.content}>
          <CalendarCard
            month={selectedDate.toLocaleString('default', { month: 'long' })}
            year={selectedDate.getFullYear()}
            monthIndex={selectedDate.getMonth()}
            selectedDay={selectedDate.getDate()}
            availableDays={availableDays}
            onSelectDay={day => {
              const newDate = new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                day,
              );
              setSelectedDate(newDate);
              setSelectedSlot(null);
            }}
            onPrevMonth={() => {
              const newDate = new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth() - 1,
                1,
              );
              setSelectedDate(newDate);
            }}
            onNextMonth={() => {
              const newDate = new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth() + 1,
                1,
              );
              setSelectedDate(newDate);
              prefetchNextMonth(newDate);
            }}
          />

          {isMonthLoading ? (
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <ActivityIndicator />
            </View>
          ) : formattedTimes.length === 0 ? (
            <Text style={{ textAlign: 'center', marginTop: 20 }}>
              No available slots
            </Text>
          ) : (
            <TimeSlots
              times={formattedTimes.map(t => t.label)}
              selected={selectedSlot ? formatTime(selectedSlot) : ''}
              onSelect={time => {
                const slot = formattedTimes.find(t => t.label === time);
                setSelectedSlot(slot?.value || null);
              }}
            />
          )}
        </ScrollView>

        <View style={styles.bottom}>
          <CustomBtn
            title="Continue"
            onPress={handlePressContinue}
            isDisabled={!selectedSlot}
          />
        </View>

        <SecurityNote />
      </View>
    </LayoutAreaView>
  );
};

export default SelectDateScreen;
