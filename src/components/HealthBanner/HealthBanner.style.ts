import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: Theme.spacing.lg,
    padding: Theme.spacing.lg,
    borderRadius: Theme.radius.md,
    backgroundColor: Theme.colors.background.soft,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  textBlock: {
    flex: 1,
    paddingRight: Theme.spacing.md,
  },

  title: {
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },

  desc: {
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.secondary,
    marginTop: 6,
    marginBottom: 12,
  },

  button: {
    backgroundColor: Theme.colors.background.accent,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: Theme.radius.md,
    alignSelf: 'flex-start',
  },

  buttonText: {
    color: Theme.colors.text.inverted,
    fontWeight: Theme.typography.fontWeight.medium,
  },

  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});
