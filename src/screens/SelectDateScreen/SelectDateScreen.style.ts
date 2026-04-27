import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingBottom: 180,
  },

  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing.md,
    paddingBottom: Theme.spacing.lg,
    backgroundColor: Theme.colors.background.soft,
  },
});
