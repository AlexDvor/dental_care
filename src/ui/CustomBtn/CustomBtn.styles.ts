import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: 282,
    height: 62,
    backgroundColor: Colors.background.dark,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    lineHeight: 30,
    fontSize: 20,
    color: Colors.text.inverted,
  },
});
