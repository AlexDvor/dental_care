import { Dimensions, StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';
const { width: deviceWidth } = Dimensions.get('window');

const MAX_CONTENT_WIDTH = deviceWidth * 0.9;
const PADDING = (deviceWidth - MAX_CONTENT_WIDTH) / 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: PADDING,
    paddingBottom: Theme.spacing.massive,
    marginTop: -Theme.spacing.xl,
  },
});
