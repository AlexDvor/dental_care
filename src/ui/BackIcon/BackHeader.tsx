import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { AppNavigation } from '../../navigation/types';
import { Icon } from '../Icon/Icon';
import { BackHeaderProps } from './BackHeader.interface';

import { styles } from './BackHeader.style';

export const BackHeader = ({ title }: BackHeaderProps) => {
  const navigation = useNavigation<AppNavigation>();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backBtn}
        activeOpacity={0.75}
        onPress={handleGoBack}
      >
        <Icon name="arrow_l" size={22} color="#1C1C1C" />
      </TouchableOpacity>

      {title ? <Text style={styles.title}>{title}</Text> : null}
    </View>
  );
};
