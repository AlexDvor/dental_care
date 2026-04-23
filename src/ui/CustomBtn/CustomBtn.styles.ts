import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.background.soft,
    paddingVertical: 14,
    borderRadius: Theme.radius.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontWeight: Theme.typography.fontWeight.semibold,
    fontSize: 14,
    color: Theme.colors.text.badge,
  },
});
