import { StyleSheet } from 'react-native';

import { Theme } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.primary.main,
    // paddingTop: 10,
    paddingBottom: 60,
    alignItems: 'center',
    borderBottomLeftRadius: Theme.radius.xl,
    borderBottomRightRadius: Theme.radius.xl,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  // topRow: {
  //   position: 'absolute',
  //   top: 50,
  //   left: Theme.spacing.lg,
  //   right: Theme.spacing.lg,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },

  // title: {
  //   color: Theme.colors.base.white,
  //   fontSize: Theme.typography.size.h3,
  //   fontWeight: Theme.typography.fontWeight.semibold,
  // },

  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Theme.colors.base.white,
    marginBottom: Theme.spacing.md,
  },

  name: {
    color: Theme.colors.base.white,
    fontSize: Theme.typography.size.h2,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  email: {
    color: '#D1D5DB',
    marginBottom: Theme.spacing.md,
  },

  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  editText: {
    color: Theme.colors.base.white,
  },
});
