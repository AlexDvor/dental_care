import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  subtitle: {
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.secondary,
    marginBottom: Theme.spacing.lg,
  },
});
