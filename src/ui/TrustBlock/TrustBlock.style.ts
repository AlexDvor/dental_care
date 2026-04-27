import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.xl,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  item: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },

  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Theme.colors.background.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Theme.spacing.sm,
  },

  label: {
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.primary,
  },

  divider: {
    position: 'absolute',
    right: 0,
    top: 10,
    height: 40,
    width: 1,
    backgroundColor: '#E5E7EB',
  },

  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: Theme.spacing.lg,
  },

  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Theme.spacing.sm,
  },

  logo: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: Theme.colors.primary.main,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText: {
    color: '#fff',
    fontWeight: '600',
  },

  brand: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.medium,
    color: Theme.colors.text.primary,
  },

  description: {
    textAlign: 'center',
    marginTop: Theme.spacing.sm,
    color: Theme.colors.text.secondary,
  },

  links: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Theme.spacing.md,
  },

  link: {
    color: Theme.colors.primary.main,
    fontSize: Theme.typography.size.small,
  },

  dot: {
    marginHorizontal: Theme.spacing.sm,
    color: Theme.colors.text.secondary,
  },
});
