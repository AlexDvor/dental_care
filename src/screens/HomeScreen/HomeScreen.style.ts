import { Dimensions, StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';
const { width: deviceWidth } = Dimensions.get('window');

const MAX_CONTENT_WIDTH = deviceWidth * 0.9;
const PADDING = (deviceWidth - MAX_CONTENT_WIDTH) / 2;

const COMPACT_HEADER_HEIGHT = 70;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.main,
  },

  content: {
    paddingHorizontal: PADDING,
    paddingBottom: Theme.spacing.massive,
    marginTop: 20,
  },

  userName: {
    textAlign: 'center',
    fontSize: Theme.typography.size.h2,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  userEmail: {
    textAlign: 'center',
    fontSize: Theme.typography.size.xs,
    color: Theme.colors.text.secondary,
    fontWeight: Theme.typography.fontWeight.semibold,
  },

  largeHeaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    elevation: 10,
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
  },

  compactHeaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,

    zIndex: 200,
    elevation: 20,
    justifyContent: 'flex-end',
    paddingBottom: 12,
    paddingHorizontal: PADDING,
    backgroundColor: Theme.colors.background.main,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.04)',
  },

  compactHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  compactAvatar: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: Theme.colors.background.accent,
  },

  compactTitle: {
    fontSize: 16,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },

  compactSubtitle: {
    marginTop: 2,
    fontSize: 12,
    color: Theme.colors.text.secondary,
    fontWeight: Theme.typography.fontWeight.medium,
  },
});
