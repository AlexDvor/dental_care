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

  content: {
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

  cardTitle: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.body,
    lineHeight: Theme.typography.lineHeight.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    marginBottom: Theme.spacing.sm,
  },

  label: {
    marginTop: Theme.spacing.md,
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  value: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  mutedText: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  treatmentItem: {
    paddingVertical: Theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: Theme.colors.border.default,
  },

  treatmentTitle: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    fontWeight: Theme.typography.fontWeight.semibold,
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
