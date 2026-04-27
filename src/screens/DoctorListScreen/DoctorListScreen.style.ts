import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    // padding: Theme.spacing.lg,
  },

  subtitle: {
    color: Theme.colors.text.secondary,
    marginBottom: Theme.spacing.md,
  },
});
