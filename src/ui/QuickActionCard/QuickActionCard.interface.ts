import { IconNameType } from '../Icon/Icon';

export type QuickActionCardProps = {
  title: string;
  onPress: () => void;
  icon: IconNameType;
  iconColor?: string;
  iconBackground?: string;
};
