import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 24,
    backgroundColor: Theme.colors.background.soft,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,

    ...Theme.shadow.medium,
  },
  ringWrap: {
    width: 112,
    height: 112,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringCenter: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringBig: { fontSize: 22, fontWeight: '700', color: Theme.colors.text.badge },
  ringSmall: {
    fontSize: 13,
    fontWeight: '500',
    color: Theme.colors.text.badge,
  },
  ringCaption: {
    fontSize: 11,
    color: Theme.colors.text.badge,
    opacity: 0.8,
    marginTop: 2,
  },
  content: { flex: 1, minWidth: 0 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: Theme.colors.text.badge,
  },
  subtitle: { fontSize: 13, color: Theme.colors.text.secondary, marginTop: 2 },

  doseRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Theme.colors.background.neutralWhite,
    borderRadius: 16,
    padding: 10,
  },
  pillWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Theme.colors.background.card,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  image: {
    width: 23,
    height: 23,
  },
  doseLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: Theme.colors.text.badge,
  },
  doseValue: {
    fontSize: 13,
    fontWeight: '600',
    color: Theme.colors.text.primary,
  },
  chevron: { color: ' rgba(27, 42, 34, 0.4)', fontSize: 20, marginTop: 2 },
});
