import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';

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
    paddingBottom: 180,
  },

  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    paddingTop: Theme.spacing.md,
    paddingBottom: Theme.spacing.md,
    marginBottom: Theme.spacing.lg,
  },
});
