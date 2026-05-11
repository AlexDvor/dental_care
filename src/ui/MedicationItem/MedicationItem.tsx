import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { MedicationType } from '../../interfaces/medication';

import { styles } from './MedicationItem.style';

const CheckIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 12.5l4.5 4.5L19 7.5"
      stroke="#FFFFFF"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

type MedicationItemProps = {
  item: MedicationType;
  onToggle: (id: string) => void;
};

export const MedicationItem = memo(
  ({ item, onToggle }: MedicationItemProps) => (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => onToggle(item.id)}
      style={[styles.item, item.taken && styles.itemTaken]}
    >
      <View style={[styles.iconWrap, item.taken && styles.iconWrapTaken]}>
        <Image
          style={styles.image}
          source={require('../../assets/images/pill.png')}
        />
      </View>

      <View style={styles.itemContent}>
        <Text style={[styles.itemName, item.taken && styles.itemNameTaken]}>
          {item.name}
        </Text>

        <Text style={styles.itemMeta}>
          {item.dose} · {item.time}
        </Text>
      </View>

      <View style={[styles.checkbox, item.taken && styles.checkboxChecked]}>
        {item.taken && <CheckIcon />}
      </View>
    </TouchableOpacity>
  ),
);
