import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    paddingBottom: Theme.spacing.xl,
  },

  bottom: {
    paddingTop: Theme.spacing.md,
    paddingBottom: Theme.spacing.md,
    paddingHorizontal: Theme.spacing.md,
  },
});
