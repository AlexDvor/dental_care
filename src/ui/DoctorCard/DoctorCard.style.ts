import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.md,
    padding: Theme.spacing.lg, //

    marginBottom: Theme.spacing.md,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  left: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },

  image: {
    width: 72,
    height: 72,
    borderRadius: 16,
    marginRight: Theme.spacing.lg,
  },

  info: {
    flex: 1,
    justifyContent: 'center',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  name: {
    flex: 1,
    fontSize: 17,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
    marginRight: 8,
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingText: {
    marginLeft: 4,
    fontSize: 13,
    color: Theme.colors.text.primary,
  },

  university: {
    fontSize: Theme.typography.size.small,
    color: Theme.colors.text.secondary,
    marginTop: 2,
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  badge: {
    backgroundColor: Theme.colors.background.soft,
    color: Theme.colors.text.badge,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
  },

  exp: {
    marginLeft: 8,
    color: Theme.colors.text.secondary,
    fontSize: 12,
  },

  arrowBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: Theme.colors.primary.main,
    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 10,
  },
});
