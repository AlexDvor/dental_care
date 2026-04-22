import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    color: Colors.text.primary,
  },

  link: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 26,
    color: Colors.text.icon,
  },
});
