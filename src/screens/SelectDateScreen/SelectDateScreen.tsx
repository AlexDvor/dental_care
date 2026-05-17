import { useMemo, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useQueryClient } from '@tanstack/react-query';

import { getSlotsByDoctorAndMonth } from '../../api/slots.api';
import { Theme } from '../../constants/theme';
import { useDoctorById } from '../../hook/useDoctorById';
import { useSlotsByMonth } from '../../hook/useSlotsByMonth';
import LayoutAreaView from '../../layout/ScreenLayout';
import ScreenLayout from '../../layout/ScreenLayout';
import { BookingStackParamList } from '../../navigation/types';
import CalendarCard from '../../ui/CalendarCard/CalendarCard';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import SubTitle from '../../ui/SubTitle/SubTitle';
import TimeSlots from '../../ui/TimeSlots/TimeSlots';
import { formatTime } from '../../utils/Date/formatTime';
import {
  getAvailableSlotDays,
  getAvailableSlotsForDate,
  getNextMonthSlotRange,
} from '../../utils/Slots/slotAvailability';

import { styles } from './SelectDateScreen.style';

type Route = RouteProp<BookingStackParamList, 'SelectDate'>;

type Navigation = NativeStackNavigationProp<
  BookingStackParamList,
  'DoctorList'
>;

const SelectDateScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();
  const queryClient = useQueryClient();

  const { doctorId, serviceType, totalPrice } = route.params;

  const { data: doctor, isLoading, error } = useDoctorById(doctorId);

  const { data: slots = [], isLoading: isMonthLoading } = useSlotsByMonth(
    doctorId,
    selectedDate,
  );

  const prefetchNextMonth = (date: Date) => {
    if (!doctorId) return;
    const { start, end } = getNextMonthSlotRange(date);

    queryClient.prefetchQuery({
      queryKey: ['slots-month', doctorId, start, end],
      queryFn: () => getSlotsByDoctorAndMonth(doctorId, start, end),
    });
  };

  const availableDays = useMemo(() => getAvailableSlotDays(slots), [slots]);

  const availableSlots = useMemo(
    () => getAvailableSlotsForDate(slots, selectedDate),
    [slots, selectedDate],
  );

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
      startTime: slot.startTime,
      endTime: slot.endTime,
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
            <View style={styles.monthLoader}>
              <ActivityIndicator />
            </View>
          ) : formattedTimes.length === 0 ? (
            <Text style={styles.emptySlotsText}>No available slots</Text>
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
            isDisabled={!selectedSlotId}
          />
        </View>
      </View>
    </LayoutAreaView>
  );
};

export default SelectDateScreen;
