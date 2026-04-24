import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import DoctorCard from '../../ui/DoctorCard/DoctorCard';
import SearchInput from '../../ui/SearchInput/SearchInput';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import SecurityNote from '../../ui/SecurityNote/SecurityNote';
import { styles } from './DoctorListScreen.style';

const DOCTORS = [
  {
    id: '1',
    name: 'Dr. John Smith',
    university: 'Harvard School of Dental Medicine',
    specialty: 'Orthodontist',
    experience: '7 years exp.',
    rating: 4.9,
    image: require('../../assets/images/dr.jpg'),
  },

  {
    id: '2',
    name: 'Dr. John Smith',
    university: 'Harvard School of Dental Medicine',
    specialty: 'Orthodontist',
    experience: '7 years exp.',
    rating: 4.9,
    image: require('../../assets/images/dr.jpg'),
  },

  {
    id: '3',
    name: 'Dr. John Smith',
    university: 'Harvard School of Dental Medicine',
    specialty: 'Orthodontist',
    experience: '7 years exp.',
    rating: 4.9,
    image: require('../../assets/images/dr.jpg'),
  },
  {
    id: '4',
    name: 'Dr. John Smith',
    university: 'Harvard School of Dental Medicine',
    specialty: 'Orthodontist',
    experience: '7 years exp.',
    rating: 4.9,
    image: require('../../assets/images/dr.jpg'),
  },

  {
    id: '5',
    name: 'Dr. John Smith',
    university: 'Harvard School of Dental Medicine',
    specialty: 'Orthodontist',
    experience: '7 years exp.',
    rating: 4.9,
    image: require('../../assets/images/dr.jpg'),
  },
  {
    id: '6',
    name: 'Dr. John Smith',
    university: 'Harvard School of Dental Medicine',
    specialty: 'Orthodontist',
    experience: '7 years exp.',
    rating: 4.9,
    image: require('../../assets/images/dr.jpg'),
  },

  {
    id: '7',
    name: 'Dr. John Smith',
    university: 'Harvard School of Dental Medicine',
    specialty: 'Orthodontist',
    experience: '7 years exp.',
    rating: 4.9,
    image: require('../../assets/images/dr.jpg'),
  },
  {
    id: '8',
    name: 'Dr. John Smith',
    university: 'Harvard School of Dental Medicine',
    specialty: 'Orthodontist',
    experience: '7 years exp.',
    rating: 4.9,
    image: require('../../assets/images/dr.jpg'),
  },

  {
    id: '9',
    name: 'Dr. John Smith',
    university: 'Harvard School of Dental Medicine',
    specialty: 'Orthodontist',
    experience: '7 years exp.',
    rating: 4.9,
    image: require('../../assets/images/dr.jpg'),
  },
];

const DoctorListScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <SectionHeader title="Choose a Doctor" />

        <Text style={styles.subtitle}>
          Select a doctor for your appointment
        </Text>

        <SearchInput value={search} onChange={setSearch} />

        {DOCTORS.map(doc => (
          <DoctorCard
            key={doc.id}
            {...doc}
            onPress={() => console.log(doc.name)}
          />
        ))}

        <SecurityNote />
      </ScrollView>
    </View>
  );
};

export default DoctorListScreen;
