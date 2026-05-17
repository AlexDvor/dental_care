import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Icon } from '../../ui/Icon/Icon';
import { formatCountdownDuration } from '../../utils/Date/formatCountdownDuration';
import { PromoBannerProps } from './PromoBanner.interface';

import { styles } from './PromoBanner.style';

const PromoBanner = ({
  title,
  description,
  buttonText,
  onPress,
  icon = 'rating',
  expiresAt,
  expiresIn,
  backgroundColor,
  borderColor,
}: PromoBannerProps) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    let endTime: number | null = null;

    if (expiresAt) {
      endTime = new Date(expiresAt).getTime();
    } else if (expiresIn) {
      endTime = Date.now() + expiresIn * 1000;
    }

    if (!endTime) return;

    const interval = setInterval(() => {
      const diff = endTime - Date.now();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt, expiresIn]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor || '#FDF6E3',
          borderColor: borderColor || '#F2C94C',
        },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Icon name={icon} size={20} color="#F2C94C" />
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.footer}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.button}>{buttonText} →</Text>
        </TouchableOpacity>

        {timeLeft !== null && timeLeft > 0 && (
          <Text style={styles.timer}>{formatCountdownDuration(timeLeft)}</Text>
        )}
      </View>
    </View>
  );
};

export default PromoBanner;
