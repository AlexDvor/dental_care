import { useMemo, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useQueryClient } from '@tanstack/react-query';

import { getSlotsByDoctorAndMonth } from '../../api/slots.api';
import { Theme } from '../../constants/colors';
import { useDoctorById } from '../../hook/useDoctorById';
import { useSlotsByMonth } from '../../hook/useSlotsByMonth';
import LayoutAreaView from '../../layout/ScreenLayout';
import ScreenLayout from '../../layout/ScreenLayout';
import { BookingStackParamList } from '../../navigation/types';
import CalendarCard from '../../ui/CalendarCard/CalendarCard';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import SecurityNote from '../../ui/SecurityNote/SecurityNote';
import SubTitle from '../../ui/SubTitle/SubTitle';
import TimeSlots from '../../ui/TimeSlots/TimeSlots';

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

// доробити бронювання місць, максимум на 2 місяця в перед

const SelectDateScreen = () => {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();
  const queryClient = useQueryClient();

  const { doctorId, serviceType, totalPrice } = route.params;

  const { data: doctor, isLoading, error } = useDoctorById(doctorId);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

  const { data: slots = [], isLoading: isMonthLoading } = useSlotsByMonth(
    doctorId,
    selectedDate,
  );

  const prefetchNextMonth = (date: Date) => {
    if (!doctorId) return;
    const next = new Date(date.getFullYear(), date.getMonth() + 1, 1);
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
      queryKey: ['slots-month', doctorId, start, end],
      queryFn: () => getSlotsByDoctorAndMonth(doctorId, start, end),
    });
  };

  const availableDays = useMemo(() => {
    const daysSet = new Set<number>();
    slots.forEach(slot => {
      if (!slot.isBooked) {
        const slotDate = new Date(slot.startTime);
        daysSet.add(slotDate.getDate());
      }
    });
    return Array.from(daysSet);
  }, [slots]);

  // Доступні слоти для вибраної дати
  const availableSlots = useMemo(() => {
    return slots.filter(slot => {
      const dateYear = selectedDate.getFullYear();
      const dateMonth = selectedDate.getMonth();
      const dateDay = selectedDate.getDate();
      const startOfDayUTC = Date.UTC(dateYear, dateMonth, dateDay, 0, 0, 0);
      const endOfDayUTC = Date.UTC(dateYear, dateMonth, dateDay + 1, 0, 0, 0);
      return (
        slot.startTime >= startOfDayUTC &&
        slot.startTime < endOfDayUTC &&
        !slot.isBooked
      );
    });
  }, [slots, selectedDate]);

  // Форматування даних для UI
  const formattedTimes = availableSlots.map(slot => ({
    label: formatTime(slot.startTime),
    id: slot.id,
    startTime: slot.startTime,
  }));

  if (isLoading) {
    return (
      <ScreenLayout
        defaultPadding
        statusBarBackgroundColor={Theme.colors.statusBar.primary}
      >
        <View style={styles.center}>
          <ActivityIndicator size={40} />
        </View>
      </ScreenLayout>
    );
  }

  if (error) {
    return (
      <ScreenLayout
        defaultPadding
        statusBarBackgroundColor={Theme.colors.statusBar.primary}
      >
        <View style={styles.center}>
          <Text>{error.message}</Text>
        </View>
      </ScreenLayout>
    );
  }

  if (!doctor) return null;

  const handlePressContinue = () => {
    if (!selectedSlotId) return;
    const slot = availableSlots.find(s => s.id === selectedSlotId);

    if (!slot) {
      setSelectedSlotId(null);
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
    <LayoutAreaView
      defaultPadding
      statusBarBackgroundColor={Theme.colors.statusBar.primary}
    >
      <View style={styles.container}>
        <SubTitle title="Select date and time for your appointment" />

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
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
              setSelectedSlotId(null);
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
              times={formattedTimes}
              selected={selectedSlotId}
              onSelect={(slotId: string) => {
                setSelectedSlotId(slotId);
              }}
            />
          )}
        </ScrollView>

        <View style={styles.bottom}>
          <CustomBtn
            title="Continue"
            onPress={handlePressContinue}
            // isDisabled={!selectedSlotId}
          />
        </View>

        <SecurityNote />
      </View>
    </LayoutAreaView>
  );
};

export default SelectDateScreen;
