import { StyleSheet } from 'react-native';

import { Theme } from '../../../constants/theme';

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
    padding: Theme.spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: Theme.colors.text.badge,
    fontWeight: Theme.typography.fontWeight.semibold,
    fontSize: Theme.typography.size.body,
  },
  value: {
    color: Theme.colors.text.badge,
    fontWeight: Theme.typography.fontWeight.semibold,
    fontSize: Theme.typography.size.h2,
  },
  secure: {
    marginTop: Theme.spacing.md,
    textAlign: 'center',
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.caption,
  },
});
