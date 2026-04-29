import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Theme } from '../../constants/colors';
import { Icon } from '../../ui/Icon/Icon';

const StatsCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Icon name="schedule" size={22} color={Theme.colors.primary.main} />
        <Text style={styles.value}>12</Text>
        <Text style={styles.label}>Total Visits</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.item}>
        <Icon name="schedule" size={22} color={Theme.colors.primary.main} />
        <Text style={styles.value}>2</Text>
        <Text style={styles.label}>Upcoming</Text>
        <Text style={styles.sub}>Next: Apr 9</Text>
      </View>
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.md,
    padding: Theme.spacing.lg,
    justifyContent: 'space-between',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  item: {
    flex: 1,
    alignItems: 'center',
  },

  divider: {
    width: 1,
    backgroundColor: Theme.colors.border.default,
  },

  value: {
    fontSize: Theme.typography.size.h2,
    color: Theme.colors.primary.main,
    fontWeight: Theme.typography.fontWeight.semibold,
    marginTop: 4,
  },

  label: {
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.secondary,
  },

  sub: {
    fontSize: 12,
    color: Theme.colors.text.secondary,
    marginTop: 2,
  },
});
