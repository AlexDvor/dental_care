import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.background.primary,
    borderRadius: 16,
    padding: 20,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  iconWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#E8F3ED',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBlock: {
    gap: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  subtitle: {
    fontSize: 14,
    color: '#6B7280',
  },

  badge: {
    backgroundColor: '#E8F3ED',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  badgeText: {
    color: '#0E7A4B',
    fontSize: 12,
    fontWeight: '500',
  },

  dateRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 16,
  },

  dateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  dateText: {
    fontSize: 13,
    color: '#6B7280',
  },

  button: {
    marginTop: 20,
    backgroundColor: '#E8F3ED',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#0E7A4B',
    fontWeight: '600',
    fontSize: 14,
  },
});
