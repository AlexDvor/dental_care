import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  btnWrapper: {
    backgroundColor: Theme.colors.primary.main,
    marginBottom: Theme.spacing.sm,
  },

  btnText: {
    color: Theme.colors.text.inverted,
  },

  footer: {
    marginTop: Theme.spacing.xxxl,
  },
});
