import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const colors = {
  background: '#F4FAF6',
  foreground: '#1B2A22',
  card: '#FFFFFF',
  border: '#E3ECE6',
  medicalGreen: '#2E9E6B',
  medicalGreenSoft: '#E6F5EC',
  medicalGreenForeground: '#FFFFFF',
  white70: 'rgba(255,255,255,0.7)',
  mutedText: 'rgba(27,42,34,0.7)',
  arrow: 'rgba(27,42,34,0.4)',
};

export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ECEFEC',
  },
  itemTaken: {
    backgroundColor: colors.medicalGreenSoft,
    borderColor: 'transparent',
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.medicalGreenSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconWrapTaken: { backgroundColor: '#FFFFFF' },
  itemContent: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: '700', color: '#0F1B14' },
  itemNameTaken: {
    textDecorationLine: 'line-through',
    color: colors.mutedText,
  },
  itemMeta: { fontSize: 13, color: colors.mutedText, marginTop: 2 },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: colors.medicalGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  checkboxChecked: { backgroundColor: colors.medicalGreen },
});
