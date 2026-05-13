import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: Theme.spacing.md,
  },

  containerColumn: {
    flex: 1,
    flexDirection: 'column',
    gap: Theme.spacing.lg,
  },

  card: {
    flex: 1,
    flexBasis: 0,
    minWidth: 0,
    minHeight: 128,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.lg,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    overflow: 'hidden',
    ...Theme.shadow.primary,
  },

  visitsCard: {
    backgroundColor: Theme.colors.background.soft,
  },

  upcomingCard: {
    backgroundColor: Theme.colors.background.backPurple,
  },

  cardColumn: {
    minHeight: 154,
  },

  content: {
    flex: 1,
    justifyContent: 'space-between',
    zIndex: 2,
  },

  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: Theme.radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    shadowColor: Theme.colors.text.primary,
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  textBlock: {
    marginTop: Theme.spacing.md,
  },

  value: {
    fontSize: Theme.typography.size.h3,
    lineHeight: Theme.typography.lineHeight.h3,
    color: Theme.colors.text.primary,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  label: {
    marginTop: 2,
    fontSize: Theme.typography.size.xs,
    lineHeight: Theme.typography.lineHeight.caption,
    color: Theme.colors.text.secondary,
    fontWeight: Theme.typography.fontWeight.medium,
  },

  imageWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageWrapperColumn: {
    right: Theme.spacing.lg,
    bottom: Theme.spacing.lg,
    width: 118,
    height: 96,
  },

  statImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    opacity: 0.9,
  },
});
