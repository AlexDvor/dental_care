import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.secondary,
    borderRadius: 24,
    padding: 16,
  },

  textWrap: {
    flexDirection: 'row',
    marginBottom: 16,
  },

  image: {
    width: 92,
    height: 96,
    borderRadius: 16,
  },

  infoWrap: { marginLeft: 16 },
  name: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
    marginBottom: 8,
  },

  profession: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 26,
    color: Colors.text.secondary,
    marginBottom: 8,
  },

  ratingWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingText: {
    marginLeft: 5,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 26,
  },
  buttonWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
