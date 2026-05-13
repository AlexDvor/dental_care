import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Theme } from '../../constants/theme';
import { Icon } from '../Icon/Icon';
import { CustomBtnProps } from './CustomBtn.types';

import { styles } from './CustomBtn.styles';

const CustomBtn = ({
  title,
  onPress,
  style,
  textStyle,
  icon,
  iconPosition = 'left',
  iconSize = 20,
  type = 'primary',
  isDisabled = false,
}: CustomBtnProps) => {
  const isPrimary = type === 'primary';

  const gradientColors = isDisabled
    ? [Theme.colors.border.default, Theme.colors.border.default]
    : isPrimary
    ? [Theme.colors.background.accentSoftGreen, Theme.colors.background.accent]
    : [Theme.colors.background.soft, Theme.colors.background.main];

  const textColor = isPrimary
    ? Theme.colors.text.inverted
    : Theme.colors.text.badge;

  const iconColor = isPrimary
    ? Theme.colors.text.inverted
    : Theme.colors.icon.primary;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.touchable,
        isPrimary && !isDisabled && Theme.shadow.small,

        style,
      ]}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[styles.gradient, isDisabled && styles.disabled]}
      >
        <View style={styles.content}>
          {icon && iconPosition === 'left' && (
            <Icon
              name={icon}
              size={iconSize}
              color={iconColor}
              style={styles.leftIcon}
            />
          )}

          <Text
            style={[
              styles.title,
              {
                color: textColor,
              },
              textStyle,
            ]}
          >
            {title}
          </Text>

          {icon && iconPosition === 'right' && (
            <Icon
              name={icon}
              size={iconSize}
              color={iconColor}
              style={styles.rightIcon}
            />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomBtn;
