import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.main,
  },

  content: {
    paddingHorizontal: Theme.spacing.lg,
    paddingBottom: Theme.spacing.massive,
  },

  appointmentLoader: {
    minHeight: 180,
    marginTop: Theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
  },

  largeHeaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    elevation: 6,
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    backgroundColor: Theme.colors.background.main,
  },

  compactHeaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 200,
    elevation: 8,
    justifyContent: 'flex-end',
    paddingBottom: 12,
    paddingHorizontal: Theme.spacing.lg,
    backgroundColor: Theme.colors.background.main,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.04)',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },

  compactHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  compactAvatar: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: Theme.colors.background.accent,
  },

  compactTitle: {
    fontSize: 16,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },

  compactSubtitle: {
    marginTop: 2,
    fontSize: 12,
    color: Theme.colors.text.secondary,
    fontWeight: Theme.typography.fontWeight.medium,
  },
});
