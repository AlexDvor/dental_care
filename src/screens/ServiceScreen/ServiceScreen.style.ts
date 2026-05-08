import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 180,
  },

  subtitle: {
    color: Theme.colors.text.secondary,
    marginBottom: Theme.spacing.lg,
  },

  bottom: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,

    padding: Theme.spacing.lg,
    backgroundColor: Theme.colors.background.soft,
    borderRadius: Theme.radius.lg,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',

    ...Theme.shadow.primary,
  },

  selectedBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.md,
    padding: Theme.spacing.md,

    marginBottom: Theme.spacing.md,
  },

  price: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.badge,
  },
});
