import React from 'react';
import { Text, View } from 'react-native';

import { Theme } from '../../../constants/theme';
import { Icon } from '../../../ui/Icon/Icon';

import { styles } from './StatsCard.styles';

const StatsCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Icon name="schedule" size={23} color={Theme.colors.icon.primary} />
        <Text style={styles.value}>12</Text>
        <Text style={styles.label}>Total Visits</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.item}>
        <Icon name="schedule" size={23} color={Theme.colors.icon.primary} />
        <Text style={styles.value}>2</Text>
        <Text style={styles.label}>Upcoming</Text>
      </View>
    </View>
  );
};

export default StatsCard;
