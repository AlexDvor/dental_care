import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import DoctorCard from '../../ui/DoctorCard/DoctorCard';
import SearchInput from '../../ui/SearchInput/SearchInput';
import SecurityNote from '../../ui/SecurityNote/SecurityNote';
import { styles } from './DoctorListScreen.style';
import { DOCTORS } from '../../mockData/doctors';
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

  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();
  const { serviceType, totalPrice } = route.params;

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

          {DOCTORS.map(doc => (
            <DoctorCard
              key={doc.id}
              {...doc}
              onPressContinue={() => handlePressContinue(doc.id)}
              onPressDoctorProfile={() => handlePressToProfileDoctor(doc.id)}
            />
          ))}

          <SecurityNote />
        </ScrollView>
      </View>
    </LayoutAreaView>
  );
};

export default DoctorListScreen;
