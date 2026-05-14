import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.xl,
    overflow: 'hidden',
    backgroundColor: Theme.colors.background.card,
    borderColor: Theme.colors.border.default,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    paddingHorizontal: Theme.spacing.xl,
    paddingBottom: Theme.spacing.xl,
    paddingTop: Theme.spacing.xxxl,
    ...Theme.shadow.medium,
  },

  row: {
    alignItems: 'stretch',
    flexDirection: 'row',
  },

  item: {
    flex: 1,
    minWidth: 0,
    paddingTop: Theme.spacing.lg,
  },

  itemBackground: {
    alignItems: 'center',
    borderRadius: Theme.radius.lg,
    minHeight: 112,
    paddingBottom: Theme.spacing.xl,
    paddingHorizontal: Theme.spacing.sm,
    paddingTop: Theme.spacing.xxxl,
  },

  iconHalo: {
    alignItems: 'center',
    backgroundColor: Theme.colors.background.card,
    borderColor: Theme.colors.border.default,
    borderRadius: Theme.radius.xxl,
    borderWidth: 1,
    height: 65,
    width: 65,
    justifyContent: 'center',
    position: 'absolute',
    top: -Theme.spacing.lg,
    ...Theme.shadow.primary,
  },

  iconWrapper: {
    alignItems: 'center',
    borderColor: Theme.colors.border.default,
    borderRadius: Theme.radius.xl,
    borderWidth: 1,
    height: 55,
    width: 55,
    justifyContent: 'center',
  },

  itemTextBlock: {
    alignItems: 'center',
    marginTop: 30,
  },

  title: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: Theme.typography.lineHeight.body,
    textAlign: 'center',
  },

  subtitle: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    marginTop: Theme.spacing.xs,
    textAlign: 'center',
  },

  divider: {
    backgroundColor: Theme.colors.border.default,
    marginHorizontal: Theme.spacing.lg,
    marginTop: Theme.spacing.md,
    width: 1,
  },

  separator: {
    backgroundColor: Theme.colors.border.default,
    height: 1,
    marginTop: Theme.spacing.xxl,
    marginBottom: Theme.spacing.xl,
  },

  brandRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Theme.spacing.md,
    justifyContent: 'center',
  },

  logo: {
    alignItems: 'center',
    backgroundColor: Theme.colors.background.accent,
    borderRadius: Theme.radius.sm,
    height: 34,
    justifyContent: 'center',
    width: 34,
  },

  logoText: {
    color: Theme.colors.text.inverted,
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: Theme.typography.lineHeight.body,
  },

  brand: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.h3,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: Theme.typography.lineHeight.h3,
  },

  description: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.body,
    lineHeight: Theme.typography.lineHeight.body,
    marginTop: Theme.spacing.md,
    textAlign: 'center',
  },

  links: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Theme.spacing.md,
  },

  link: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: Theme.typography.lineHeight.body,
  },

  linkDivider: {
    backgroundColor: Theme.colors.border.default,
    height: 18,
    marginHorizontal: Theme.spacing.lg,
    width: 1,
  },
});
