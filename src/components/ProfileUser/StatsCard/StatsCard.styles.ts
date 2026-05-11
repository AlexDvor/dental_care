import { StyleSheet } from 'react-native';

import { Theme } from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.md,
    padding: Theme.spacing.lg,
    justifyContent: 'space-between',
    marginBottom: Theme.spacing.lg,

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
    marginHorizontal: Theme.spacing.md,
  },

  value: {
    fontSize: Theme.typography.size.h2,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.badge,
    marginTop: 4,
  },

  label: {
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.secondary,
  },
});
