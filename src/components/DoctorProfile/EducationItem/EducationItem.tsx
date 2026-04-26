import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../../constants/colors';
import { Icon } from '../../../ui/Icon/Icon';

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

const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,
    flexDirection: 'row',
  },

  iconWrapper: {
    marginRight: Theme.spacing.lg,
  },
  title: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    marginBottom: Theme.spacing.sm,
    color: Theme.colors.text.primary,
  },
  main: {
    color: Theme.colors.text.primary,
  },
  secondary: {
    color: Theme.colors.text.secondary,
    marginTop: Theme.spacing.xs,
  },
});
