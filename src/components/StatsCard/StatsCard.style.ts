import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
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

  iconWrapper: {
    backgroundColor: Theme.colors.background.main,
    padding: 10,
    borderRadius: 50,
  },

  divider: {
    width: 1,
    backgroundColor: Theme.colors.border.default,
  },

  value: {
    fontSize: Theme.typography.size.h2,
    color: Theme.colors.text.primary,
    fontWeight: Theme.typography.fontWeight.semibold,
    marginTop: 4,
  },

  label: {
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.secondary,
  },
});
