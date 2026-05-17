import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Icon } from '../../ui/Icon/Icon';
import { ServiceCardProps } from './ServiceCard.interface';

import { styles } from './ServiceCard.style';

const ServiceCard = ({
  title,
  description,
  price,
  icon,
  selected,
  onPress,
  id,
}: ServiceCardProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(id)}
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

export default memo(ServiceCard);
