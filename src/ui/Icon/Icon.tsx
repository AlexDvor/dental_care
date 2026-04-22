import { IconProps } from './Icon.interface';
import ArrowRight from '../../assets/icons/right_arrow.svg';
import Star from '../../assets/icons/rating.svg';
import Map from '../../assets/icons/map.svg';
import Location from '../../assets/icons/location.svg';
import Schedule from '../../assets/icons/calendario.svg';

export const iconList = {
  arrow_r: ArrowRight,
  rating: Star,
  map: Map,
  location: Location,
  schedule: Schedule,
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
