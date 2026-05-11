import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Theme.colors.background.card,
    borderRadius: 24,
    padding: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EAF0ED',
    shadowColor: '#0F172A',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  iconWrapper: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.background.soft,
  },

  headerTitle: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: 22,
  },

  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 18,
  },

  textBlock: {
    flex: 1,
    minWidth: 0,
  },

  title: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.h3,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: 26,
  },

  subtitle: {
    marginTop: 6,
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },

  calendarPanel: {
    width: 116,
    height: 116,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  calendarImage: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
    opacity: 0.92,
  },

  button: {
    marginTop: 18,
  },
});
