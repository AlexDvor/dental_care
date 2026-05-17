import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    ...Theme.shadow.medium,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.md,
  },

  headerTitle: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: Theme.typography.lineHeight.body,
  },

  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: Theme.radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
  },

  contentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Theme.spacing.md,
    marginTop: Theme.spacing.lg,
  },

  infoColumn: {
    flex: 1,
    minWidth: 0,
  },

  doctorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.md,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: Theme.radius.xl,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    backgroundColor: Theme.colors.background.soft,
  },

  doctorTextBlock: {
    flex: 1,
    minWidth: 0,
    gap: 4,
  },

  doctorName: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: Theme.typography.lineHeight.body,
  },

  appointmentType: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  separator: {
    width: '100%',
    height: 1,
    backgroundColor: Theme.colors.border.default,
    marginTop: Theme.spacing.lg,
    marginBottom: Theme.spacing.md,
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.md,
  },

  timeIconWrapper: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  timeTextBlock: {
    gap: Theme.spacing.xs,
  },

  dateLabel: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  timeText: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.h3,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: Theme.typography.lineHeight.h3,
  },

  calendarPanel: {
    width: 112,
    height: 112,
    borderRadius: Theme.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Theme.spacing.lg,
  },

  calendarImage: {
    width: 128,
    height: 128,
    resizeMode: 'contain',
  },

  button: {
    marginTop: Theme.spacing.lg,
  },
});
