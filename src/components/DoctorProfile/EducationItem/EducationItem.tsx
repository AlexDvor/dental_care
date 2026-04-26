import React from 'react';
import { View, Text } from 'react-native';
import { Theme } from '../../../constants/colors';
import { Icon } from '../../../ui/Icon/Icon';
import { styles } from './EducationItem.style';

const EducationItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon name="education" size={30} color={Theme.colors.icon.primary} />
      </View>
      <View>
        <Text style={styles.title}>Education</Text>

        <Text style={styles.main}>Harvard School of Dental Medicine</Text>

        <Text style={styles.secondary}>
          2010 - 2014 · Doctor of Dental Medicine (DMD)
        </Text>
      </View>
    </View>
  );
};

export default EducationItem;
