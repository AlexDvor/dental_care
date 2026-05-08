import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.xl,
    padding: Theme.spacing.xl,
    overflow: 'hidden',
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  item: {
    flex: 1,
    alignItems: 'center',
  },

  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    backgroundColor: Theme.colors.background.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Theme.spacing.sm,

    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  title: {
    fontSize: Theme.typography.size.small,
    fontWeight: Theme.typography.fontWeight.medium,
    color: Theme.colors.text.primary,
  },

  subtitle: {
    fontSize: Theme.typography.size.caption,
    color: 'rgba(107,114,128,0.8)',
    marginTop: 2,
  },

  divider: {
    width: 1,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.06)',
  },

  separator: {
    height: 1,
    backgroundColor: Theme.colors.border.default,
    marginVertical: Theme.spacing.lg,
  },

  brandRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Theme.spacing.sm,
    marginTop: 4,
  },

  logo: {
    width: 32,
    height: 32,
    borderRadius: Theme.radius.sm,
    backgroundColor: Theme.colors.background.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText: {
    color: Theme.colors.text.inverted,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  brand: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },

  description: {
    textAlign: 'center',
    marginTop: Theme.spacing.sm,
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.secondary,
  },

  links: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Theme.spacing.md,
  },

  link: {
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.badge,
    fontWeight: Theme.typography.fontWeight.medium,
  },

  dot: {
    marginHorizontal: Theme.spacing.sm,
    color: Theme.colors.text.secondary,
  },
  waveDecor: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,

    backgroundColor: '#D1FAE5',
    opacity: 0.1,

    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});
