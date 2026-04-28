import { StyleSheet } from 'react-native';

import { Theme } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: Theme.spacing.lg,
  },

  title: {
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.secondary,
    marginBottom: Theme.spacing.sm,
  },

  card: {
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.md,
    overflow: 'hidden',
  },
});
