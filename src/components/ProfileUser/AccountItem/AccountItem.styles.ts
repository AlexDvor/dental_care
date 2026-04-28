import { StyleSheet } from 'react-native';

import { Theme } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Theme.spacing.lg,
  },

  border: {
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.border.default,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: Theme.colors.background.soft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Theme.spacing.md,
  },

  label: {
    fontSize: Theme.typography.size.body,
    color: Theme.colors.text.primary,
  },
});
