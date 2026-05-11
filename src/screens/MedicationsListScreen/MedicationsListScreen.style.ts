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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Theme.colors.background.card,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Theme.colors.text.primary,
    marginLeft: 12,
  },
  subtitle: {
    fontSize: 13,
    color: Theme.colors.text.secondary,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  summaryCard: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 20,
    backgroundColor: Theme.colors.background.accentSoftGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  summaryLabel: { color: '#FFFFFFCC', fontSize: 13, fontWeight: '500' },

  summaryValue: {
    color: Theme.colors.text.inverted,
    fontSize: 26,
    fontWeight: '800',
    marginTop: 2,
  },
  summaryRight: { alignItems: 'flex-end' },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.mutedText,
    letterSpacing: 1,

    marginTop: 8,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  list: { paddingBottom: 32 },
});
