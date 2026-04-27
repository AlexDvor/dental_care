import { StyleSheet } from 'react-native';

import { Theme } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,
  },

  title: {
    fontWeight: Theme.typography.fontWeight.semibold,
    marginBottom: Theme.spacing.md,
  },
  card: {
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,
    paddingHorizontal: Theme.spacing.lg,
  },
});
