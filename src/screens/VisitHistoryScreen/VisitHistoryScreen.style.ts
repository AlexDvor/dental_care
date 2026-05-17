import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  list: {
    paddingTop: Theme.spacing.sm,
    paddingBottom: Theme.spacing.massive,
    gap: Theme.spacing.md,
  },

  filterList: {
    paddingBottom: Theme.spacing.lg,
    gap: Theme.spacing.sm,
  },

  filterChip: {
    minHeight: 42,
    paddingHorizontal: Theme.spacing.md,
    borderRadius: Theme.radius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.sm,
    backgroundColor: Theme.colors.background.card,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    ...Theme.shadow.small,
  },

  filterChipActive: {
    backgroundColor: Theme.colors.background.accent,
    borderColor: Theme.colors.background.accent,
  },

  filterText: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  filterTextActive: {
    color: Theme.colors.text.inverted,
  },

  filterCount: {
    minWidth: 24,
    height: 24,
    paddingHorizontal: Theme.spacing.xs,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.background.soft,
  },

  filterCountActive: {
    backgroundColor: Theme.colors.background.neutralWhite,
  },

  filterCountText: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.caption,
    lineHeight: Theme.typography.lineHeight.caption,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  filterCountTextActive: {
    color: Theme.colors.text.badge,
  },

  timelineRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: Theme.spacing.md,
  },

  timelineRail: {
    width: 22,
    alignItems: 'center',
    position: 'relative',
  },

  timelineLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 2,
    borderRadius: 1,
    backgroundColor: Theme.colors.border.default,
  },

  timelineMarker: {
    width: 16,
    height: 16,
    marginTop: Theme.spacing.xl,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: Theme.colors.background.main,
    ...Theme.shadow.small,
  },

  timelineMarkerUpcoming: {
    backgroundColor: Theme.colors.background.accent,
  },

  timelineMarkerCompleted: {
    backgroundColor: Theme.colors.status.info,
  },

  timelineMarkerCancelled: {
    backgroundColor: Theme.colors.icon.teal,
  },

  timelineMarkerMissed: {
    backgroundColor: Theme.colors.status.error,
  },

  card: {
    flex: 1,
    padding: Theme.spacing.lg,
    borderRadius: Theme.radius.lg,
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
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 4,
    backgroundColor: Theme.colors.background.soft,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
  },

  doctorAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
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
    fontSize: Theme.typography.size.caption,
    lineHeight: Theme.typography.lineHeight.caption,
    fontWeight: Theme.typography.fontWeight.semibold,
    textTransform: 'capitalize',
    textAlign: 'center',
  },

  statusTextUpcoming: {
    color: Theme.colors.text.badge,
  },

  statusTextCompleted: {
    color: Theme.colors.status.info,
  },

  statusTextCancelled: {
    color: Theme.colors.icon.teal,
  },

  statusTextMissed: {
    color: Theme.colors.status.error,
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
    marginLeft: 34,
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
