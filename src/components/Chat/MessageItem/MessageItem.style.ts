import { Dimensions, StyleSheet } from 'react-native';

import { Colors } from '../../../constants/colors';

// const { width } = Dimensions.get('window');
// const deviceWidth = width * 0.85;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 116,
    backgroundColor: Colors.background.secondary,
    borderRadius: 16,
    elevation: 5,
    padding: 16,
    justifyContent: 'space-between',

    flexDirection: 'row',

    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  infoContainer: {
    justifyContent: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 25,
    marginBottom: 8,
  },

  ms: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.text.secondary,
  },

  timeContainer: {
    alignItems: 'flex-end',
  },

  time: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '500',
    color: Colors.text.secondary,
    marginBottom: 16,
  },

  wrapMessage: {
    width: 32,
    height: 32,
    backgroundColor: Colors.primary.light,
    borderRadius: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },

  quantityMs: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    color: Colors.text.inverted,
  },
});
