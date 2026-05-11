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
    borderColor: '#EEF2F0',
    overflow: 'hidden',
    ...Theme.shadow.primary,
  },

  visitsCard: {
    backgroundColor: '#F8FCFF',
  },

  upcomingCard: {
    backgroundColor: '#FCFAFF',
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
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Theme.colors.text.primary,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
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

  visitStatsImage: {
    position: 'absolute',
    right: Theme.spacing.md,
    bottom: Theme.spacing.md,
    width: 98,
    height: 74,
    resizeMode: 'contain',
    opacity: 0.92,
  },

  visitStatsImageColumn: {
    right: Theme.spacing.lg,
    bottom: Theme.spacing.lg,
    width: 134,
    height: 98,
  },

  calendarWrapper: {
    position: 'absolute',
    right: Theme.spacing.md,
    bottom: Theme.spacing.md,
    width: 98,
    height: 74,
    alignItems: 'center',
    justifyContent: 'center',
  },

  calendarWrapperColumn: {
    right: Theme.spacing.lg,
    bottom: Theme.spacing.lg,
    width: 134,
    height: 98,
  },

  calendarImage: {
    width: 102,
    height: 102,
    resizeMode: 'contain',
    opacity: 0.92,
  },

  calendarImageColumn: {
    width: 134,
    height: 134,
  },
});
