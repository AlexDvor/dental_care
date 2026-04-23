import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './QuickActionCard.style';
import { Icon } from '../../ui/Icon/Icon';
import { IconName } from '../Icon/Icon.interface';

type Props = {
  title: string;
  onPress: () => void;
  icon: IconName;
};

const QuickActionCard = ({ title, onPress, icon }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Icon name={icon} size={28} color="#0E7A4B" />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default QuickActionCard;
