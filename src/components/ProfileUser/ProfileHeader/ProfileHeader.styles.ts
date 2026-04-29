import { Dimensions, StyleSheet } from 'react-native';

import { Theme } from '../../../constants/colors';

const { width: deviceWidth } = Dimensions.get('window');

const MAX_CONTENT_WIDTH = deviceWidth * 0.9;
const PADDING = (deviceWidth - MAX_CONTENT_WIDTH) / 2;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.primary.main,

    paddingBottom: 10,
    borderBottomLeftRadius: Theme.radius.xl,
    borderBottomRightRadius: Theme.radius.xl,
  },

  paddingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: PADDING,
    paddingTop: 10,
  },
  leftBlock: {
    flexDirection: 'row',
  },

  nameContainer: {
    marginLeft: Theme.spacing.lg,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
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

  btnContainer: {},

  editBtn: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: Theme.spacing.md,
    borderRadius: 50,
  },

  editText: {
    color: Theme.colors.base.white,
  },
});
