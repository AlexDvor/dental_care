import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.lg,
    marginBottom: Theme.spacing.xl,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },

  month: {
    fontSize: Theme.typography.size.h3,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },

  actions: {
    flexDirection: 'row',
  },

  arrow: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: Theme.colors.background.soft,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  day: {
    width: '14.28%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  dayInner: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F5F3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dayActive: {
    backgroundColor: Theme.colors.primary.main,
  },

  dayDisabled: {
    backgroundColor: '#F5F5F5',
  },

  dayText: {
    fontSize: 14,
    color: Theme.colors.text.primary,
  },

  dayTextActive: {
    color: '#fff',
    fontWeight: '600',
  },

  dayTextDisabled: {
    color: '#C0C0C0',
  },

  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  weekDay: {
    width: '14.28%',
    textAlign: 'center',
    fontSize: 12,
    color: Theme.colors.text.secondary,
  },
});
