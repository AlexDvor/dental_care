import { Dimensions, StyleSheet } from 'react-native';

import { Theme } from '../../../constants/theme';

const { height: deviceHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.background.main,
  },
  screen: {
    flex: 1,
    paddingHorizontal: Theme.spacing.xxl,
    paddingBottom: Theme.spacing.xxl,
  },
  hero: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    minHeight: deviceHeight * 0.42,
  },
  image: {
    height: '100%',
    maxHeight: 420,
    width: '100%',
  },
  content: {
    alignItems: 'center',
    marginBottom: Theme.spacing.xxxl,
  },
  title: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.h1,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: Theme.typography.lineHeight.h1,
    marginBottom: Theme.spacing.md,
    textAlign: 'center',
  },
  description: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.body,
    fontWeight: Theme.typography.fontWeight.regular,
    lineHeight: Theme.typography.lineHeight.body,
    textAlign: 'center',
  },
  footer: {
    gap: Theme.spacing.xxl,
  },
  pagination: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Theme.spacing.sm,
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: Theme.colors.border.default,
    borderRadius: Theme.radius.sm,
    height: Theme.spacing.sm,
    width: Theme.spacing.sm,
  },
  activeDot: {
    backgroundColor: Theme.colors.background.accent,
    width: Theme.spacing.xxl,
  },
  button: {
    width: '100%',
  },
});

