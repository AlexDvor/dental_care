import { StyleSheet } from 'react-native';

import { Theme } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
    marginTop: Theme.spacing.lg,
  },
  card: {
    flex: 1,
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: Theme.typography.size.h3,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.primary.main,
    textAlign: 'center',
  },
  label: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.caption,
    textAlign: 'center',
  },
});
