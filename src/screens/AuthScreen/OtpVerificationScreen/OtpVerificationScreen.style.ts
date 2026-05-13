import { StyleSheet } from 'react-native';

import { Theme } from '../../../constants/theme';

const HERO_HEIGHT = Theme.spacing.massive * 4;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.background.main,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: Theme.spacing.xxl,
    paddingHorizontal: Theme.spacing.xxl,
  },
  hero: {
    alignItems: 'center',
    height: HERO_HEIGHT,
    justifyContent: 'center',
    marginBottom: Theme.spacing.lg,
  },
  image: {
    height: HERO_HEIGHT,
    width: '86%',
  },
  header: {
    alignItems: 'center',
    marginBottom: Theme.spacing.xxl,
  },
  title: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.h2,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: Theme.typography.lineHeight.h2,
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
  codeRow: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
    justifyContent: 'center',
  },
  codeInput: {
    backgroundColor: Theme.colors.background.card,
    borderColor: Theme.colors.border.default,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.h2,
    fontWeight: Theme.typography.fontWeight.semibold,
    height: 64,
    width: 58,
  },
  footer: {
    gap: Theme.spacing.lg,
    marginTop: Theme.spacing.xxl,
  },
  button: {
    width: '100%',
  },
  resendButton: {
    alignItems: 'center',
  },
  secondaryAction: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.small,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: Theme.typography.lineHeight.small,
  },
});
