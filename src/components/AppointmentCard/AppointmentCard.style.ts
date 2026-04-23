import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Theme.colors.background.primary,
    borderRadius: Theme.radius.md,
    padding: 20,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  iconWrapper: {
    width: 50,
    height: 50,
    backgroundColor: Theme.colors.background.soft,
    borderRadius: Theme.radius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBlock: {
    gap: 4,
  },

  title: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },

  subtitle: {
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.secondary,
  },

  badge: {
    backgroundColor: Theme.colors.background.soft,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Theme.radius.lg,
  },

  badgeText: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.caption,
    fontWeight: Theme.typography.fontWeight.medium,
  },

  dateRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 16,
  },

  dateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  dateText: {
    fontSize: Theme.typography.size.xs,
    color: Theme.colors.text.secondary,
  },
});
