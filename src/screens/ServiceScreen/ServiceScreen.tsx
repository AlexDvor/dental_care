import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SERVICES } from '../../mockData/services';
import { BookingStackParamList } from '../../navigation/types';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import SecurityNote from '../../ui/SecurityNote/SecurityNote';
import { styles } from './ServiceScreen.style';
import LayoutAreaView from '../../layout/LayoutAreaView';

type Navigation = NativeStackNavigationProp<
  BookingStackParamList,
  'ServiceList'
>;

const ServiceScreen = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const navigation = useNavigation<Navigation>();

  const toggleService = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
    );
  };

  const total = SERVICES.filter(s => selected.includes(s.id)).reduce(
    (sum, s) => sum + s.price,
    0,
  );

  const handlePressContinue = () => {
    const selectedServices = SERVICES.filter(s => selected.includes(s.id));

    const serviceTitles = selectedServices.map(i => i.title);

    navigation.navigate('DoctorList', {
      serviceType: serviceTitles,
      totalPrice: total,
    });
  };

  return (
    <LayoutAreaView withHeader>
      <View style={styles.container}>
        <Text style={styles.subtitle}>You can select one or more services</Text>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {SERVICES.map(service => (
            <ServiceCard
              key={service.id}
              {...service}
              selected={selected.includes(service.id)}
              onPress={() => toggleService(service.id)}
            />
          ))}
        </ScrollView>

        <View style={styles.bottom}>
          <View style={styles.selectedBox}>
            <Text>Selected ({selected.length})</Text>
            <Text style={styles.price}>${total}</Text>
          </View>

          <CustomBtn title="Continue" onPress={() => handlePressContinue()} />

          <SecurityNote />
        </View>
      </View>
    </LayoutAreaView>
  );
};

export default ServiceScreen;
