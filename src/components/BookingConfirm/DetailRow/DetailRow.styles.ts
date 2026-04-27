import { StyleSheet } from 'react-native';
import { Theme } from '../../../constants/colors';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: Theme.spacing.md,

    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  lastRow: {
    borderBottomWidth: 0,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.md,
  },

  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: Theme.radius.sm,

    backgroundColor: Theme.colors.background.soft,

    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
  },

  value: {
    color: Theme.colors.text.primary,
    fontWeight: Theme.typography.fontWeight.medium,
  },
});
