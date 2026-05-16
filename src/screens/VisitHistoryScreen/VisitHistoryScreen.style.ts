import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.md,
    marginBottom: Theme.spacing.xl,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: Theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.background.card,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
  },

  title: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.h2,
    lineHeight: Theme.typography.lineHeight.h2,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  list: {
    paddingBottom: Theme.spacing.massive,
    gap: Theme.spacing.md,
  },

  card: {
    padding: Theme.spacing.lg,
    borderRadius: Theme.radius.lg,
    backgroundColor: Theme.colors.background.card,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    ...Theme.shadow.small,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Theme.spacing.md,
  },

  cardTitleBlock: {
    flex: 1,
    minWidth: 0,
    gap: Theme.spacing.xs,
  },

  doctorName: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.body,
    lineHeight: Theme.typography.lineHeight.body,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  services: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  statusBadge: {
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
    backgroundColor: '#FEF3C7',
  },

  statusCancelled: {
    backgroundColor: '#FEE2E2',
  },

  statusText: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.caption,
    lineHeight: Theme.typography.lineHeight.caption,
    fontWeight: Theme.typography.fontWeight.semibold,
    textTransform: 'capitalize',
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: Theme.spacing.sm,
    marginTop: Theme.spacing.md,
  },

  metaText: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  metaDivider: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  cancelButton: {
    marginTop: Theme.spacing.md,
    minHeight: 42,
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
    marginTop: Theme.spacing.md,
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  warningText: {
    marginTop: Theme.spacing.md,
    color: Theme.colors.status.error,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  contactClinicBox: {
    marginTop: Theme.spacing.md,
    minHeight: 42,
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
