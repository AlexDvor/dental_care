import React from 'react';
import { View, Text } from 'react-native';
import { Theme } from '../../../constants/colors';
import { Icon } from '../../../ui/Icon/Icon';
import { styles } from './EducationItem.style';
import { EducationItemProps } from './EducationItem.inteface';

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
