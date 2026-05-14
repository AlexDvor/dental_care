import { StyleSheet } from 'react-native';

import { Theme } from '../../../constants/theme';

const HERO_HEIGHT = Theme.spacing.massive * 6;

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
    marginBottom: Theme.spacing.xl,
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
  form: {
    gap: Theme.spacing.md,
  },
  field: {
    gap: Theme.spacing.sm,
  },
  label: {
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.small,
    fontWeight: Theme.typography.fontWeight.medium,
    lineHeight: Theme.typography.lineHeight.small,
  },
  input: {
    backgroundColor: Theme.colors.background.card,
    borderColor: Theme.colors.border.default,
    borderRadius: Theme.radius.md,
    borderWidth: 1,
    color: Theme.colors.text.primary,
    fontSize: Theme.typography.size.body,
    minHeight: 56,
    paddingHorizontal: Theme.spacing.lg,
  },
  inputError: {
    borderColor: Theme.colors.status.error,
  },
  errorText: {
    color: Theme.colors.status.error,
    fontSize: Theme.typography.size.caption,
    lineHeight: Theme.typography.lineHeight.caption,
  },
  placeholder: {
    color: Theme.colors.text.placeholder,
  },
  footer: {
    gap: Theme.spacing.lg,
    marginTop: Theme.spacing.xxl,
  },
  button: {
    width: '100%',
  },
  secondaryRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Theme.spacing.xs,
    justifyContent: 'center',
  },
  secondaryText: {
    color: Theme.colors.text.secondary,
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
  },
  secondaryAction: {
    color: Theme.colors.text.badge,
    fontSize: Theme.typography.size.small,
    fontWeight: Theme.typography.fontWeight.semibold,
    lineHeight: Theme.typography.lineHeight.small,
  },
});
