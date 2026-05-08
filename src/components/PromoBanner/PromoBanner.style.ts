import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    borderRadius: Theme.radius.md,
    padding: Theme.spacing.lg,
    borderWidth: 1,
    marginTop: Theme.spacing.lg,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.sm,
  },

  iconWrapper: {
    marginRight: Theme.spacing.sm,
  },

  title: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },

  description: {
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.secondary,
    marginBottom: Theme.spacing.md,
    lineHeight: 20,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    fontSize: Theme.typography.size.small,
    fontWeight: Theme.typography.fontWeight.medium,
    color: Theme.colors.text.badge,
  },

  timer: {
    fontSize: 12,
    color: Theme.colors.text.secondary,
  },
});
