import { Dimensions, StyleSheet } from 'react-native';

const { width: deviceWidth } = Dimensions.get('window');

const MAX_CONTENT_WIDTH = deviceWidth * 0.9;
const PADDING = (deviceWidth - MAX_CONTENT_WIDTH) / 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING,
    paddingTop: 10,
    backgroundColor: '#E8F3ED',
  },
});
