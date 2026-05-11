import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: Theme.spacing.md,
  },

  card: {
    flex: 1,
    // minHeight: 100,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.md,
    backgroundColor: Theme.colors.background.card,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    overflow: 'hidden',
    ...Theme.shadow.primary,
  },

  content: {
    flex: 1,
    justifyContent: 'space-between',
    zIndex: 2,
  },

  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: Theme.radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Theme.colors.text.primary,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  textBlock: {
    marginTop: Theme.spacing.sm,
  },

  value: {
    fontSize: Theme.typography.size.h2,
    lineHeight: Theme.typography.lineHeight.h2,
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

  chart: {
    position: 'absolute',
    right: Theme.spacing.sm,
    bottom: Theme.spacing.lg,
    opacity: 0.9,
  },

  calendarWrapper: {
    position: 'absolute',
    right: -Theme.spacing.sm,
    bottom: Theme.spacing.sm,
    width: 86,
    height: 86,
    alignItems: 'center',
    justifyContent: 'center',
  },

  calendarImage: {
    width: 104,
    height: 104,
    resizeMode: 'contain',
    opacity: 0.88,
  },
});
