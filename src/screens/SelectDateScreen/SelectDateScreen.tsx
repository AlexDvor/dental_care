import { useMemo, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useQueryClient } from '@tanstack/react-query';

import { getSlotsByDoctorAndMonth } from '../../api/slots.api';
// import { getAppointmentsByDoctorAndDate } from '../../api/appointments.api';
// import { useAppointmentsByMonth } from '../../hook/useAppointmentsByMonth';
import { useDoctorById } from '../../hook/useDoctorById';
import { useSlotsByMonth } from '../../hook/useSlotsByMonth';
import LayoutAreaView from '../../layout/LayoutAreaView';
import { BookingStackParamList } from '../../navigation/types';
import CalendarCard from '../../ui/CalendarCard/CalendarCard';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import SecurityNote from '../../ui/SecurityNote/SecurityNote';
import SubTitle from '../../ui/SubTitle/SubTitle';
import TimeSlots from '../../ui/TimeSlots/TimeSlots';

// import { filterAvailableSlots } from '../../utils/filterAvailableSlots';
// import { generateTimeSlots } from '../../utils/generateTimeSlots';
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
  const { data: slots = [], isLoading: isMonthLoading } = useSlotsByMonth(
    doctorId,
    selectedDate,
  );

  console.log(
    'has matching slots:',
    slots.some(s => s.doctorId === doctorId),
  );
  console.log('doctorId:', doctorId);
  console.log('SLOTS:', slots);

  // 🔥 PREFETCH наступного місяця
  const prefetchNextMonth = (date: Date) => {
    if (!doctorId) return;

    const next = new Date(date.getFullYear(), date.getMonth() + 1, 1);

    // ✅ FIX — UTC
    const start = Date.UTC(next.getFullYear(), next.getMonth(), 1);

    const end = Date.UTC(
      next.getFullYear(),
      next.getMonth() + 1,
      0,
      23,
      59,
      59,
      999,
    );

    queryClient.prefetchQuery({
      // 🔥 теж краще виправити
      queryKey: ['slots-month', doctorId, start, end],
      queryFn: () => getSlotsByDoctorAndMonth(doctorId, start, end),
    });
  };

  // 👉 available days
  const availableDays = useMemo(() => {
    const days = new Set<number>();

    slots.forEach(slot => {
      if (!slot.isBooked) {
        const date = new Date(slot.startTime);
        days.add(date.getDate());
      }
    });

    return Array.from(days);
  }, [slots]);
  // 👉 slots
  const availableSlots = useMemo(() => {
    return slots.filter(slot => {
      const d = new Date(slot.startTime);

      return (
        d.getDate() === selectedDate.getDate() &&
        d.getMonth() === selectedDate.getMonth() &&
        !slot.isBooked
      );
    });
  }, [slots, selectedDate]);

  // 👉 UI
  const formattedTimes = availableSlots.map(slot => ({
    label: formatTime(slot.startTime),
    value: slot.startTime,
  }));

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

    const slot = availableSlots.find(s => s.startTime === selectedSlot);

    if (!slot) {
      setSelectedSlot(null);
      return;
    }

    navigation.navigate('BookingConfirm', {
      serviceType,
      totalPrice,
      doctorData: doctor,
      date: selectedDate.toISOString(),
      time: formatTime(slot.startTime),
      slotId: slot.id,
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
