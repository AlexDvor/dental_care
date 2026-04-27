import { StyleSheet } from 'react-native';

import { Theme } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.lg,
    padding: Theme.spacing.lg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontWeight: Theme.typography.fontWeight.medium,
  },
  stars: {
    marginTop: 2,
  },
  time: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.caption,
  },
  text: {
    marginTop: Theme.spacing.md,
    color: Theme.colors.text.secondary,
  },
});
