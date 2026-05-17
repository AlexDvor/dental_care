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
    ...Theme.shadow.small,
  },

  title: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.h2,
    lineHeight: Theme.typography.lineHeight.h2,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  content: {
    paddingBottom: Theme.spacing.massive,
    gap: Theme.spacing.md,
  },

  appointmentCard: {
    padding: Theme.spacing.lg,
    borderRadius: Theme.radius.lg,
    backgroundColor: Theme.colors.background.card,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    ...Theme.shadow.medium,
  },

  appointmentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.md,
  },

  doctorAvatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: Theme.colors.background.backBlue,
  },

  appointmentTextBlock: {
    flex: 1,
    minWidth: 0,
  },

  doctorName: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.body,
    lineHeight: Theme.typography.lineHeight.body,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  completedBadge: {
    paddingHorizontal: Theme.spacing.sm,
    paddingVertical: Theme.spacing.xs,
    borderRadius: Theme.radius.sm,
    backgroundColor: Theme.colors.background.backBlue,
  },

  completedBadgeText: {
    color: Theme.colors.status.info,
    fontSize: Theme.typography.size.caption,
    lineHeight: Theme.typography.lineHeight.caption,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  appointmentMetaRow: {
    marginTop: Theme.spacing.lg,
    paddingTop: Theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: Theme.colors.border.default,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.sm,
  },

  metaIconBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.background.soft,
  },

  appointmentMetaText: {
    flex: 1,
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    fontWeight: Theme.typography.fontWeight.medium,
  },

  card: {
    padding: Theme.spacing.lg,
    borderRadius: Theme.radius.lg,
    backgroundColor: Theme.colors.background.card,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    ...Theme.shadow.small,
  },

  cardTitle: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.body,
    lineHeight: Theme.typography.lineHeight.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    marginBottom: Theme.spacing.md,
  },

  clinicalTimeline: {
    gap: Theme.spacing.md,
  },

  treatmentTimeline: {
    gap: Theme.spacing.md,
  },

  timelineItem: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: Theme.spacing.md,
  },

  timelineRail: {
    width: 18,
    alignItems: 'center',
    position: 'relative',
  },

  timelineLine: {
    position: 'absolute',
    top: Theme.spacing.md,
    bottom: -Theme.spacing.md,
    width: 2,
    borderRadius: 1,
    backgroundColor: Theme.colors.border.default,
  },

  timelineDot: {
    width: 12,
    height: 12,
    marginTop: Theme.spacing.xs,
    borderRadius: 6,
    backgroundColor: Theme.colors.background.accent,
    borderWidth: 3,
    borderColor: Theme.colors.background.soft,
  },

  timelineContent: {
    flex: 1,
    minWidth: 0,
    paddingBottom: Theme.spacing.xs,
  },

  label: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  value: {
    marginTop: Theme.spacing.xs,
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  mutedText: {
    marginTop: Theme.spacing.xs,
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  chipRow: {
    marginTop: Theme.spacing.sm,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Theme.spacing.sm,
  },

  toothChip: {
    minHeight: 30,
    minWidth: 42,
    paddingHorizontal: Theme.spacing.sm,
    borderRadius: Theme.radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.background.soft,
  },

  toothChipText: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  treatmentTitle: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  timeChip: {
    minHeight: 30,
    paddingHorizontal: Theme.spacing.sm,
    borderRadius: Theme.radius.sm,
    justifyContent: 'center',
    backgroundColor: Theme.colors.background.backTeal,
  },

  timeChipText: {
    color: Theme.colors.icon.teal,
    fontSize: Theme.typography.size.caption,
    lineHeight: Theme.typography.lineHeight.caption,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  instructions: {
    marginTop: Theme.spacing.sm,
    padding: Theme.spacing.md,
    borderRadius: Theme.radius.md,
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    backgroundColor: Theme.colors.background.soft,
  },

  starRow: {
    flexDirection: 'row',
    gap: Theme.spacing.sm,
    marginBottom: Theme.spacing.md,
  },

  star: {
    color: Theme.colors.status.warning,
    fontSize: Theme.typography.size.h2,
    lineHeight: Theme.typography.lineHeight.h2,
  },

  stars: {
    color: Theme.colors.status.warning,
    fontSize: Theme.typography.size.h3,
    lineHeight: Theme.typography.lineHeight.h3,
    marginBottom: Theme.spacing.sm,
  },

  reviewInput: {
    minHeight: 96,
    padding: Theme.spacing.md,
    marginBottom: Theme.spacing.md,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    color: Theme.colors.text.primary,
    backgroundColor: Theme.colors.background.card,
    textAlignVertical: 'top',
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Theme.spacing.lg,
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
});
