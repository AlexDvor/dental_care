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
    shadowOpacity: 0.06,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  headerTitle: {
    color: Theme.colors.text.badge,
    fontSize: 17,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: 22,
  },

  iconWrapper: {
    width: 38,
    height: 38,
    backgroundColor: Theme.colors.background.soft,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 14,
    marginTop: 18,
  },

  infoColumn: {
    flex: 1,
    minWidth: 0,
  },

  doctorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: '#E7ECEA',
    backgroundColor: Theme.colors.background.soft,
  },

  doctorTextBlock: {
    flex: 1,
    minWidth: 0,
    gap: 4,
  },

  doctorName: {
    color: Theme.colors.text.primary,
    fontSize: 18,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: 24,
  },

  appointmentType: {
    color: Theme.colors.text.secondary,
    fontSize: 14,
    lineHeight: 19,
  },

  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEF2F0',
    marginTop: 18,
    marginBottom: 16,
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  timeTextBlock: {
    gap: 2,
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
    lineHeight: 28,
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
  },
});
