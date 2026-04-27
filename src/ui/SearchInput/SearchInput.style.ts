import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Theme.spacing.sm,
    marginBottom: Theme.spacing.lg,
  },

  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.md,
    paddingHorizontal: Theme.spacing.md,
  },

  input: {
    flex: 1,
    marginLeft: 8,
  },
});
