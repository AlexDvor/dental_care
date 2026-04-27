import { TextStyle,ViewStyle } from 'react-native';

import { IconName } from '../Icon/Icon.interface';

export interface CustomBtnProps {
  title: string;
  onPress: () => void;

  style?: ViewStyle;
  textStyle?: TextStyle;

  icon?: IconName;
  iconPosition?: 'left' | 'right';
  iconSize?: number;
  iconColor?: string;
  type?: 'primary' | 'secondary';
}
