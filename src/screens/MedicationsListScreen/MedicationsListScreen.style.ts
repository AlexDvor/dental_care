import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Theme.spacing.md,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Theme.colors.background.card,
    alignItems: 'center',
    justifyContent: 'center',
    ...Theme.shadow.small,
  },
  title: {
    fontSize: Theme.typography.size.h3,
    lineHeight: Theme.typography.lineHeight.h3,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
    marginLeft: Theme.spacing.md,
  },
  subtitle: {
    fontSize: Theme.typography.size.xs,
    lineHeight: Theme.typography.lineHeight.caption,
    color: Theme.colors.text.secondary,
    paddingHorizontal: Theme.spacing.lg,
    marginBottom: Theme.spacing.md,
  },
  summaryCard: {
    marginBottom: Theme.spacing.lg,
    padding: Theme.spacing.lg,
    borderRadius: Theme.radius.lg,
    backgroundColor: Theme.colors.background.accentSoftGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    color: Theme.colors.background.neutralWhite,
    fontSize: Theme.typography.size.xs,
    lineHeight: Theme.typography.lineHeight.caption,
    fontWeight: Theme.typography.fontWeight.medium,
  },
  summaryValue: {
    color: Theme.colors.text.inverted,
    fontSize: Theme.typography.size.h2,
    lineHeight: Theme.typography.lineHeight.h2,
    fontWeight: Theme.typography.fontWeight.semibold,
    marginTop: 2,
  },
  summaryRight: {
    alignItems: 'flex-end',
  },
  sectionLabel: {
    fontSize: Theme.typography.size.caption,
    lineHeight: Theme.typography.lineHeight.caption,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.secondary,
    letterSpacing: 1,
    marginTop: Theme.spacing.sm,
    marginBottom: Theme.spacing.sm,
    textTransform: 'uppercase',
  },
  list: {
    paddingBottom: Theme.spacing.xxxl,
  },
});
