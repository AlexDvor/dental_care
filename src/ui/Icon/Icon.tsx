import ArrowRight from '../../assets/icons/right_arrow.svg';
import { IconProps } from './Icon.interface';

export const iconList = {
  arrow_r: ArrowRight,
} as const;

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
};

export const Icon = ({
  name,
  size = 16,
  color = '#000',
  ...props
}: IconProps) => {
  const Component = iconList[name];

  const computedSize = typeof size === 'number' ? size : sizeMap[size];

  return (
    <Component
      width={computedSize}
      height={computedSize}
      color={color}
      {...props}
    />
  );
};
