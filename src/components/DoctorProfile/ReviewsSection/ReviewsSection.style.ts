import { StyleSheet } from 'react-native';

import { Theme } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
    paddingHorizontal: Theme.spacing.lg,
  },

  title: {
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },

  seeAll: {
    color: Theme.colors.text.badge,
  },

  scrollContent: {
    paddingLeft: Theme.spacing.lg,
  },

  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Theme.spacing.md,
    gap: Theme.spacing.xs,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D1D5DB',
  },

  activeDot: {
    backgroundColor: Theme.colors.background.accent,
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Theme.spacing.xxxl,
  },

  emptyText: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.medium,
    color: Theme.colors.text.primary,
  },

  emptySubText: {
    marginTop: Theme.spacing.xs,
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
  },
});
