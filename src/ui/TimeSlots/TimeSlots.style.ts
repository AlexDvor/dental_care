import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },

  title: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },

  recommended: {
    fontSize: 12,
    color: '#F2C94C',
    fontWeight: '500',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
