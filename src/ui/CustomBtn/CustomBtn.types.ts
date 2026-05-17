import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { IconName } from '../Icon/Icon.interface';

export interface CustomBtnProps {
  title: string;
  onPress: () => void;

  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;

  icon?: IconName;
  iconPosition?: 'left' | 'right';
  iconSize?: number;
  iconColor?: string;
  type?: 'primary' | 'secondary';
  isDisabled?: boolean;
}
