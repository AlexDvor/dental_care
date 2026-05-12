import { StyleSheet } from 'react-native';

import { Theme } from '../../constants/theme';

const timelineWidth = 28;
const timelineDotSize = 22;

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    minHeight: 86,
  },
  timeline: {
    width: timelineWidth,
    alignItems: 'center',
    marginRight: Theme.spacing.md,
  },
  timelineLine: {
    position: 'absolute',
    width: 2,
    left: (timelineWidth - 2) / 2,
    backgroundColor: Theme.colors.border.default,
  },
  timelineLineTop: {
    top: 0,
    bottom: '50%',
  },
  timelineLineBottom: {
    top: '50%',
    bottom: 0,
  },
  timelineLineActive: {
    backgroundColor: Theme.colors.border.primary,
  },
  timelineLineHidden: {
    opacity: 0,
  },
  timelineDot: {
    width: timelineDotSize,
    height: timelineDotSize,
    borderRadius: timelineDotSize / 2,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Theme.spacing.xl,
    backgroundColor: Theme.colors.background.card,
    zIndex: 1,
  },
  timelineDotActive: {
    borderColor: Theme.colors.border.primary,
  },
  timelineDotPending: {
    borderColor: Theme.colors.text.placeholder,
  },
  timelineDotCenter: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Theme.colors.icon.primary,
  },
  swipeWrap: {
    flex: 1,
  },
  swipeAction: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: Theme.spacing.md,
    width: 96,
    borderRadius: Theme.radius.md,
    backgroundColor: Theme.colors.status.success,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: Theme.spacing.lg,
  },
  swipeActionIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Theme.colors.background.neutralWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedItem: {
    flex: 1,
    borderRadius: Theme.radius.md,
    marginBottom: Theme.spacing.md,
    ...Theme.shadow.small,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.background.card,
    borderRadius: Theme.radius.md,
    paddingVertical: Theme.spacing.md,
    paddingHorizontal: Theme.spacing.lg,
    borderWidth: 1,
    borderColor: Theme.colors.border.default,
    overflow: 'hidden',
  },
  holdProgress: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: Theme.colors.background.accentSoftGreen,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: Theme.radius.md,
    backgroundColor: Theme.colors.background.soft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Theme.spacing.md,
  },
  image: {
    width: 34,
    height: 34,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: Theme.typography.size.body,
    lineHeight: Theme.typography.lineHeight.small,
    fontWeight: Theme.typography.fontWeight.semibold,
    color: Theme.colors.text.primary,
  },
  itemMeta: {
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    color: Theme.colors.text.secondary,
    marginTop: 2,
  },
  itemTime: {
    fontSize: Theme.typography.size.small,
    lineHeight: Theme.typography.lineHeight.small,
    color: Theme.colors.text.secondary,
    marginLeft: Theme.spacing.md,
  },
  checkbox: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: Theme.colors.text.placeholder,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Theme.spacing.md,
  },
  checkboxChecked: {
    backgroundColor: Theme.colors.status.success,
    borderColor: Theme.colors.status.success,
  },
});
