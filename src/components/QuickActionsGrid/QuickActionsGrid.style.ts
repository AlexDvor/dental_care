import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    gap: Theme.spacing.md,
  },

  row: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
  },
});
