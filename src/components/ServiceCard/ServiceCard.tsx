import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './ServiceCard.style';
import { Icon } from '../../ui/Icon/Icon';

type Props = {
  title: string;
  description: string;
  price: number;
  icon: any;

  selected?: boolean;
  onPress: () => void;
};

const ServiceCard = ({
  title,
  description,
  price,
  icon,
  selected,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.container, selected && styles.selectedContainer]}
    >
      <View style={styles.left}>
        <Image source={icon} style={styles.image} />

        <View style={styles.textBlock}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>

      <View style={[styles.checkbox, selected && styles.checkboxActive]}>
        {selected && <Icon name="check" size={14} color="#fff" />}
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
