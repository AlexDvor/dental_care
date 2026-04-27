import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: Theme.spacing.md,
    gap: Theme.spacing.xs,
  },

  text: {
    fontSize: Theme.typography.size.caption,
    color: Theme.colors.text.secondary,
  },
});
