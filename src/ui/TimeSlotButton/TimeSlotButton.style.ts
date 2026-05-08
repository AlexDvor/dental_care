import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '31%',
    paddingVertical: 12,

    borderRadius: Theme.radius.md,
    backgroundColor: Theme.colors.background.card,
    borderWidth: 1,
    borderColor: '#E5E7EB',

    alignItems: 'center',
    marginBottom: Theme.spacing.sm,
  },

  active: {
    backgroundColor: Theme.colors.background.accent,
    borderColor: Theme.colors.border.primary,
  },

  recommended: {
    borderColor: '#F2C94C',
    backgroundColor: '#FFF8E1',
  },

  text: {
    fontSize: 14,
    color: Theme.colors.text.primary,
  },

  textActive: {
    color: '#fff',
    fontWeight: '600',
  },
});
