import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.primary,
  },

  content: {
    paddingHorizontal: Theme.spacing.lg,
    paddingBottom: Theme.spacing.massive,
    marginTop: 20,
  },

  userName: {
    textAlign: 'center',
    fontSize: Theme.typography.size.h2,
    fontWeight: Theme.typography.fontWeight.semibold,
  },
  userEmail: {
    textAlign: 'center',
    fontSize: Theme.typography.size.xs,
    color: Theme.colors.text.secondary,
    fontWeight: Theme.typography.fontWeight.semibold,
  },
});
