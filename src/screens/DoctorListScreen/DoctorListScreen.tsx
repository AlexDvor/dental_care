import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';

import DoctorCard from '../../ui/DoctorCard/DoctorCard';
import SearchInput from '../../ui/SearchInput/SearchInput';
import SecurityNote from '../../ui/SecurityNote/SecurityNote';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';

import { styles } from './DoctorListScreen.style';

import { useDoctors } from '../../hook/useDoctors';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BookingStackParamList } from '../../navigation/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import LayoutAreaView from '../../layout/LayoutAreaView';

type Route = RouteProp<BookingStackParamList, 'DoctorList'>;

type Navigation = NativeStackNavigationProp<
  BookingStackParamList,
  'DoctorList'
>;

const DoctorListScreen = () => {
  const [search, setSearch] = useState('');

  const { data: doctors, loading, error, refetch } = useDoctors();

  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();
  const { serviceType, totalPrice } = route.params;

  const filteredDoctors = useMemo(() => {
    if (!search.trim()) return doctors;

    return doctors.filter(doc =>
      doc.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, doctors]);

  const handlePressToProfileDoctor = (id: string) => {
    navigation.navigate('DoctorProfile', {
      doctorId: id,
      serviceType,
      totalPrice,
    });
  };

  const handlePressContinue = (id: string) => {
    navigation.navigate('SelectDate', {
      doctorId: id,
      serviceType,
      totalPrice,
    });
  };

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
        <View style={styles.container}>
          <Text>{error}</Text>
          <CustomBtn title="Try again" onPress={refetch} />
        </View>
      </LayoutAreaView>
    );
  }

  return (
    <LayoutAreaView withHeader>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.subtitle}>
            Select a doctor for your appointment
          </Text>

          <SearchInput value={search} onChange={setSearch} />

          {filteredDoctors.map(doc => (
            <DoctorCard
              key={doc.id}
              doctor={doc}
              onPressContinue={() => handlePressContinue(doc.id)}
              onPressDoctorProfile={() => handlePressToProfileDoctor(doc.id)}
            />
          ))}

          {!filteredDoctors.length && (
            <Text style={{ textAlign: 'center' }}>No doctors found</Text>
          )}
        </ScrollView>
        <SecurityNote />
      </View>
    </LayoutAreaView>
  );
};

export default DoctorListScreen;
