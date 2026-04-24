import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { Theme } from '../../constants/colors';
import { styles } from './ServiceScreen.style';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const SERVICES = [
  {
    id: '1',
    title: 'General Checkup',
    description: 'Routine examination',
    price: 50,
    icon: require('../../assets/images/services/checkup.png'),
  },
  {
    id: '2',
    title: 'Teeth Cleaning',
    description: 'Professional cleaning',
    price: 80,
    icon: require('../../assets/images/services/cleaning.png'),
  },
  {
    id: '3',
    title: 'Teeth Whitening',
    description: 'Cosmetic whitening',
    price: 200,
    icon: require('../../assets/images/services/whitening.png'),
  },
  {
    id: '4',
    title: 'Cavity Filling',
    description: 'Tooth restoration',
    price: 150,
    icon: require('../../assets/images/services/prepar.png'),
  },
];

const ServiceScreen = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
    );
  };

  const total = SERVICES.filter(s => selected.includes(s.id)).reduce(
    (sum, s) => sum + s.price,
    0,
  );

  return (
    <View style={styles.container}>
      <SectionHeader title="Choose Services" style={styles.sectionHeader} />

      <Text style={styles.subtitle}>You can select one or more services</Text>

      {SERVICES.map(service => (
        <ServiceCard
          key={service.id}
          {...service}
          selected={selected.includes(service.id)}
          onPress={() => toggleService(service.id)}
        />
      ))}

      <View style={styles.selectedBox}>
        <Text>Selected ({selected.length})</Text>
        <Text style={styles.price}>${total}</Text>
      </View>
    </View>
  );
};

export default ServiceScreen;
