import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    padding: Theme.spacing.lg,
  },

  sectionHeader: {
    marginBottom: 0,
  },

  subtitle: {
    color: Theme.colors.text.secondary,
    marginBottom: Theme.spacing.lg,
  },

  selectedBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.md,

    padding: 20,
  },
  price: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.badge,
  },
});
