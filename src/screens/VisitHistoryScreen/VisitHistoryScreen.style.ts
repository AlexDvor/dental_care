import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  list: {
    paddingTop: Theme.spacing.sm,
    paddingBottom: Theme.spacing.massive,
    gap: Theme.spacing.md,
  },

  card: {
    padding: Theme.spacing.lg,
    borderRadius: Theme.radius.xl,
    backgroundColor: Theme.colors.background.card,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    ...Theme.shadow.medium,
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Theme.spacing.md,
  },

  avatarContainer: {
    width: 82,
    height: 82,
    borderRadius: 41,
    padding: 4,
    backgroundColor: Theme.colors.background.soft,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    ...Theme.shadow.small,
  },

  doctorAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 37,
    backgroundColor: Theme.colors.background.backBlue,
  },

  cardContent: {
    flex: 1,
    minWidth: 0,
    paddingTop: Theme.spacing.xs,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Theme.spacing.sm,
  },

  cardTitleBlock: {
    flex: 1,
    minWidth: 0,
  },

  doctorName: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.body,
    lineHeight: Theme.typography.lineHeight.body,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  services: {
    marginTop: Theme.spacing.xs,
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    fontWeight: Theme.typography.fontWeight.regular,
  },

  statusBadge: {
    maxWidth: 112,
    paddingHorizontal: Theme.spacing.sm,
    paddingVertical: Theme.spacing.xs,
    borderRadius: Theme.radius.sm,
  },

  statusUpcoming: {
    backgroundColor: Theme.colors.background.soft,
  },

  statusCompleted: {
    backgroundColor: Theme.colors.background.backBlue,
  },

  statusMissed: {
    backgroundColor: Theme.colors.background.backPurple,
  },

  statusCancelled: {
    backgroundColor: Theme.colors.background.backTeal,
  },

  statusText: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.caption,
    lineHeight: Theme.typography.lineHeight.caption,
    fontWeight: Theme.typography.fontWeight.semibold,
    textTransform: 'capitalize',
    textAlign: 'center',
  },

  metaRow: {
    marginTop: Theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: Theme.spacing.sm,
  },

  metaIconBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.background.soft,
  },

  metaText: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    fontWeight: Theme.typography.fontWeight.medium,
  },

  metaDivider: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  cancelButton: {
    marginTop: Theme.spacing.lg,
    minHeight: 44,
    borderRadius: Theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.status.error,
    backgroundColor: Theme.colors.background.card,
  },

  disabledButton: {
    opacity: 0.55,
  },

  cancelButtonText: {
    color: Theme.colors.status.error,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  policyNote: {
    marginTop: Theme.spacing.md,
    padding: Theme.spacing.md,
    borderRadius: Theme.radius.md,
    backgroundColor: Theme.colors.background.soft,
  },

  policyText: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  helperText: {
    marginTop: Theme.spacing.lg,
    padding: Theme.spacing.md,
    borderRadius: Theme.radius.md,
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    backgroundColor: Theme.colors.background.soft,
  },

  warningText: {
    marginTop: Theme.spacing.lg,
    padding: Theme.spacing.md,
    borderRadius: Theme.radius.md,
    color: Theme.colors.status.error,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    backgroundColor: Theme.colors.background.backPurple,
  },

  contactClinicBox: {
    marginTop: Theme.spacing.lg,
    minHeight: 44,
    borderRadius: Theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.background.soft,
  },

  contactClinicText: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Theme.spacing.lg,
  },

  emptyCard: {
    padding: Theme.spacing.xl,
    alignItems: 'center',
    borderRadius: Theme.radius.lg,
    backgroundColor: Theme.colors.background.card,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    ...Theme.shadow.small,
  },

  emptyTitle: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.body,
    lineHeight: Theme.typography.lineHeight.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    textAlign: 'center',
  },

  emptyText: {
    marginTop: Theme.spacing.xs,
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    textAlign: 'center',
  },

  retryButton: {
    marginTop: Theme.spacing.lg,
    width: 160,
  },
});
