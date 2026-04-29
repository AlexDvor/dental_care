import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Theme } from '../../constants/colors';
import QuickActionCard from '../../ui/QuickActionCard/QuickActionCard';

const QuickActionsGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <QuickActionCard title="Book" icon="schedule" onPress={() => {}} />
        <QuickActionCard title="Find" icon="findDoctor" onPress={() => {}} />
      </View>

      <View style={styles.row}>
        <QuickActionCard title="Chat" icon="chat" onPress={() => {}} />
        <QuickActionCard
          title="Records"
          icon="viewRecords"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default QuickActionsGrid;

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,
    gap: Theme.spacing.md,
  },

  row: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
  },
});
