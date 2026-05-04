import { useMemo, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useDoctors } from '../../hook/useDoctors';
import LayoutAreaView from '../../layout/LayoutAreaView';
import { BookingStackParamList } from '../../navigation/types';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import DoctorCard from '../../ui/DoctorCard/DoctorCard';
import SearchInput from '../../ui/SearchInput/SearchInput';
import SecurityNote from '../../ui/SecurityNote/SecurityNote';
import SubTitle from '../../ui/SubTitle/SubTitle';

import { styles } from './DoctorListScreen.style';

type Route = RouteProp<BookingStackParamList, 'DoctorList'>;

type Navigation = NativeStackNavigationProp<
  BookingStackParamList,
  'DoctorList'
>;

const DoctorListScreen = () => {
  const [search, setSearch] = useState('');

  const { data: doctors, isLoading, error, refetch } = useDoctors();

  const navigation = useNavigation<Navigation>();

  const route = useRoute<Route>();

  const { serviceType, totalPrice } = route.params;

  const filteredDoctors = useMemo(() => {
    if (!search.trim()) return doctors;

    return doctors?.filter(doc =>
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

  if (isLoading) {
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
        <SubTitle title="Select a doctor for your appointment" />

        <SearchInput value={search} onChange={setSearch} />
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {filteredDoctors?.map(doc => (
            <DoctorCard
              key={doc.id}
              doctor={doc}
              onPressContinue={() => handlePressContinue(doc.id)}
              onPressDoctorProfile={() => handlePressToProfileDoctor(doc.id)}
            />
          ))}

          {!filteredDoctors?.length && (
            <Text style={{ textAlign: 'center' }}>No doctors found</Text>
          )}
        </ScrollView>
        <SecurityNote />
      </View>
    </LayoutAreaView>
  );
};

export default DoctorListScreen;
