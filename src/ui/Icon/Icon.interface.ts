import { SvgProps } from 'react-native-svg';
import { iconList } from './Icon';

export type IconName = keyof typeof iconList;

export type IconProps = SvgProps & {
  name: IconName;
  size?: number;
  color?: string;
};
