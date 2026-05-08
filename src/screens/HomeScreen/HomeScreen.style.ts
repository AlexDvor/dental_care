import { Dimensions, StyleSheet } from 'react-native';

import { Theme } from '../../constants/colors';
const { width: deviceWidth } = Dimensions.get('window');

const MAX_CONTENT_WIDTH = deviceWidth * 0.9;
const PADDING = (deviceWidth - MAX_CONTENT_WIDTH) / 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.main,
  },

  content: {
    paddingHorizontal: PADDING,
    paddingBottom: Theme.spacing.massive,
    marginTop: 20,
  },

  userName: {
    textAlign: 'center',
    fontSize: Theme.typography.size.h2,
    fontWeight: Theme.typography.fontWeight.semibold,
  },
  userEmail: {
    textAlign: 'center',
    fontSize: Theme.typography.size.xs,
    color: Theme.colors.text.secondary,
    fontWeight: Theme.typography.fontWeight.semibold,
  },
});
