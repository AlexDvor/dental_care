import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,
    gap: Theme.spacing.md,
  },

  row: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
  },
});
