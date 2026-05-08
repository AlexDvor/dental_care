import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: Theme.spacing.lg,
    borderRadius: Theme.radius.md,
    backgroundColor: Theme.colors.background.card,

    marginBottom: Theme.spacing.md,

    borderWidth: 1,
    borderColor: 'transparent',
  },

  selectedContainer: {
    borderColor: Theme.colors.border.primary,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  image: {
    width: 56,
    height: 56,
    marginRight: Theme.spacing.md,
  },

  textBlock: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.medium,
    color: Theme.colors.text.primary,
  },

  description: {
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.secondary,
    marginTop: 2,
  },

  price: {
    marginTop: 6,
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.badge,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#D1D5DB',

    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxActive: {
    backgroundColor: Theme.colors.background.accent,
    borderColor: Theme.colors.border.primary,
  },
});
