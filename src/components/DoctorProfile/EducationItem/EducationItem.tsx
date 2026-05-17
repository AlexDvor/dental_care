import React from 'react';
import { Text, View } from 'react-native';

import { Theme } from '../../../constants/theme';
import { Icon } from '../../../ui/Icon/Icon';
import { EducationItemProps } from './EducationItem.interface';

import { styles } from './EducationItem.style';

const EducationItem = ({ education }: EducationItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon name="education" size={30} color={Theme.colors.icon.primary} />
      </View>
      <View>
        <Text style={styles.title}>Education</Text>

        <Text style={styles.main}>{education.university || ''}</Text>

        <Text style={styles.secondary}>
          {`${education.period} · ${education.degree}`}
        </Text>
      </View>
    </View>
  );
};

export default EducationItem;
