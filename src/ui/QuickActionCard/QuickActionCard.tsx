import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Theme } from '../../constants/theme';
import { Icon } from '../Icon/Icon';
import { QuickActionCardProps } from './QuickActionCard.interface';

import { styles } from './QuickActionCard.style';

const QuickActionCard = ({
  title,
  onPress,
  icon,
  iconColor,
  iconBackground,
}: QuickActionCardProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View
        style={[
          styles.iconWrapper,
          {
            backgroundColor: iconBackground || Theme.colors.background.soft,
          },
        ]}
      >
        <Icon
          name={icon}
          size={25}
          color={iconColor || Theme.colors.icon.primary}
        />
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default QuickActionCard;
