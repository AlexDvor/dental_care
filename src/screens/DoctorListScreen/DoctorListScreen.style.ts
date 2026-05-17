import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyText: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    textAlign: 'center',
  },

  content: {},
});
