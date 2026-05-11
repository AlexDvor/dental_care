import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Icon } from '../../ui/Icon/Icon';

import { styles } from './PromoBanner.style';

type Props = {
  title: string;
  description: string;
  buttonText: string;
  onPress: () => void;

  icon?: keyof typeof import('../../ui/Icon/Icon').iconList;

  // таймер
  expiresAt?: Date; // конкретна дата
  expiresIn?: number; // секунди (наприклад 3600)

  backgroundColor?: string;
  borderColor?: string;
};

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
}: Props) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  // 🔥 ініціалізація таймера
  useEffect(() => {
    let endTime: number | null = null;

    if (expiresAt) {
      endTime = new Date(expiresAt).getTime();
    } else if (expiresIn) {
      endTime = Date.now() + expiresIn * 1000;
    }

    if (!endTime) return;

    const interval = setInterval(() => {
      const diff = endTime! - Date.now();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt, expiresIn]);

  // 🧠 формат часу
  const formatTime = (ms: number) => {
    const totalSec = Math.floor(ms / 1000);

    const days = Math.floor(totalSec / (3600 * 24));
    const hours = Math.floor((totalSec % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);

    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

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
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Icon name={icon} size={20} color="#F2C94C" />
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>{description}</Text>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.button}>{buttonText} →</Text>
        </TouchableOpacity>

        {/* Таймер */}
        {timeLeft !== null && timeLeft > 0 && (
          <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
        )}
      </View>
    </View>
  );
};

export default PromoBanner;
