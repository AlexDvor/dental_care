import { StyleSheet } from 'react-native';
import { Theme } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.lg,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  nameWrapper: {
    flex: 1,
  },
  name: {
    fontWeight: Theme.typography.fontWeight.semibold,
    fontSize: Theme.typography.size.h3,
    marginBottom: Theme.spacing.xs,
  },
  badge: {
    backgroundColor: Theme.colors.background.soft,
    alignSelf: 'flex-start',
    borderRadius: Theme.radius.xl,
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: Theme.spacing.xs,
    marginBottom: Theme.spacing.xs,
  },
  badgeText: {
    color: Theme.colors.primary.main,
    fontSize: Theme.typography.size.small,
  },
  rating: {
    marginTop: Theme.spacing.xs,
    color: Theme.colors.text.secondary,
  },
});
