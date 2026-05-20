import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  touchable: {
    borderRadius: Theme.radius.lg,
    overflow: 'hidden',
    ...Theme.shadow.button,
  },

  gradient: {
    minHeight: 56,
    paddingHorizontal: Theme.spacing.lg,
    borderRadius: Theme.radius.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },

  disabled: {
    opacity: 1,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: Theme.colors.text.inverted,
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  loader: {
    marginRight: Theme.spacing.sm,
  },

  leftIcon: {
    marginRight: Theme.spacing.sm,
  },

  rightIcon: {
    marginLeft: Theme.spacing.sm,
  },
});
