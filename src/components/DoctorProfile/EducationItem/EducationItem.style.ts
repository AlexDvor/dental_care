import { StyleSheet } from 'react-native';
import { Theme } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,
    flexDirection: 'row',
  },

  iconWrapper: {
    marginRight: Theme.spacing.lg,
  },
  title: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    marginBottom: Theme.spacing.sm,
    color: Theme.colors.text.primary,
  },
  main: {
    color: Theme.colors.text.primary,
  },
  secondary: {
    color: Theme.colors.text.secondary,
    marginTop: Theme.spacing.xs,
  },
});
