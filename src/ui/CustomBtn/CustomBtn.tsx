import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
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
  isLoading = false,
}: CustomBtnProps) => {
  const isPrimary = type === 'primary';
  const isLoadingState = isLoading;
  const isDisabledState = isDisabled && !isLoading;
  const isPressDisabled = isDisabled || isLoading;

  const gradientColors = isPrimary
    ? [Theme.colors.background.accentSoftGreen, Theme.colors.background.accent]
    : [Theme.colors.background.soft, Theme.colors.background.main];

  const disabledGradientColors = [
    Theme.colors.border.default,
    Theme.colors.border.default,
  ];

  const buttonGradientColors = isDisabledState
    ? disabledGradientColors
    : gradientColors;

  const activeTextColor = isPrimary
    ? Theme.colors.text.inverted
    : Theme.colors.text.badge;

  const activeIconColor = isPrimary
    ? Theme.colors.text.inverted
    : Theme.colors.icon.primary;

  const textColor = isDisabledState
    ? Theme.colors.text.placeholder
    : activeTextColor;

  const iconColor = isDisabledState
    ? Theme.colors.text.placeholder
    : activeIconColor;

  const loaderColor = isPrimary
    ? Theme.colors.text.inverted
    : Theme.colors.text.badge;
  const buttonShadow =
    !isPressDisabled && isPrimary ? Theme.shadow.small : undefined;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={isPressDisabled}
      style={[styles.touchable, buttonShadow, style]}
    >
      <LinearGradient
        colors={buttonGradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[
          styles.gradient,
          isDisabledState && styles.disabled,
          !isPrimary && isDisabledState && styles.secondaryDisabled,
          isLoadingState && styles.loading,
        ]}
      >
        <View style={styles.content}>
          {isLoadingState && (
            <ActivityIndicator
              size="small"
              color={loaderColor}
              style={styles.loader}
            />
          )}

          {!isLoadingState && icon && iconPosition === 'left' && (
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

          {!isLoadingState && icon && iconPosition === 'right' && (
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
