import { StyleSheet } from 'react-native';

import { Theme } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.xxxl + Theme.spacing.md,
  },
  title: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
    marginBottom: Theme.spacing.sm,
  },
  text: {
    color: Theme.colors.text.secondary,
    lineHeight: Theme.typography.lineHeight.body,
  },
});
