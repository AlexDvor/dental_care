import { StyleSheet } from 'react-native';

import { Theme } from '../../../constants/colors';

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Theme.spacing.xxxl,
  },
  image: {
    width: '100%',
    height: 400,
  },
  card: {
    position: 'absolute',
    bottom: -50,
    left: Theme.spacing.lg,
    right: Theme.spacing.lg,
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.lg,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  name: {
    fontSize: Theme.typography.size.h3,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },
  badge: {
    backgroundColor: Theme.colors.background.soft,
    alignSelf: 'flex-start',
    borderRadius: Theme.radius.xl,
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: Theme.spacing.xs,
    marginTop: Theme.spacing.sm,
  },
  badgeText: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.small,
  },

  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  rating: {
    marginTop: Theme.spacing.sm,
    color: Theme.colors.text.primary,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  review: {
    color: Theme.colors.text.secondary,
  },
});
