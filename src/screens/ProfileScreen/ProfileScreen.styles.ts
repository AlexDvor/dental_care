import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.primary,
  },
  content: {
    paddingHorizontal: Theme.spacing.lg,
    paddingBottom: Theme.spacing.massive,
    marginTop: -Theme.spacing.xl,
  },
});
