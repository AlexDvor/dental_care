import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './QuickActionCard.style';
import { Theme } from '../../constants/colors';
import { Icon } from '../Icon/Icon';

type Props = {
  title: string;
  onPress: () => void;
  icon: keyof typeof import('../Icon/Icon').iconList;
  iconColor?: string;
  iconBackground?: string;
};

const QuickActionCard = ({
  title,
  onPress,
  icon,
  iconColor,
  iconBackground,
}: Props) => {
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
          color={iconColor || Theme.colors.primary.main}
        />
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default QuickActionCard;
