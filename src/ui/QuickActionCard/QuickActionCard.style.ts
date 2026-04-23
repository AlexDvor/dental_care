import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.md,
    padding: Theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',

    // Shadow (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },

    // Android
    elevation: 2,
  },

  iconWrapper: {
    marginBottom: Theme.spacing.sm,
  },

  title: {
    fontSize: Theme.typography.size.small,
    fontWeight: Theme.typography.fontWeight.medium,
    color: Theme.colors.text.primary,
    textAlign: 'center',
  },
});
