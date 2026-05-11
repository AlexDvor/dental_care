import Award from '../../assets/icons/award.svg';
import Schedule from '../../assets/icons/calendario.svg';
import Chat from '../../assets/icons/chat-support.svg';
import Check from '../../assets/icons/check.svg';
import Edit from '../../assets/icons/edit.svg';
import Education from '../../assets/icons/education.svg';
import FindDoctor from '../../assets/icons/find_doctor.svg';
import Home from '../../assets/icons/home.svg';
import ArrowLeft from '../../assets/icons/left_arrow.svg';
import Location from '../../assets/icons/location.svg';
import Lock from '../../assets/icons/lock.svg';
import LogOut from '../../assets/icons/logout.svg';
import Map from '../../assets/icons/map.svg';
import Notification from '../../assets/icons/notification.svg';
import Price from '../../assets/icons/price.svg';
import Profile from '../../assets/icons/profile.svg';
import Star from '../../assets/icons/rating.svg';
import ArrowRight from '../../assets/icons/right_arrow.svg';
import Search from '../../assets/icons/search.svg';
import Service from '../../assets/icons/service.svg';
import Time from '../../assets/icons/time.svg';
import Verified from '../../assets/icons/verified.svg';
import ViewRecords from '../../assets/icons/view-records.svg';
import { IconProps } from './Icon.interface';

export const iconList = {
  arrow_r: ArrowRight,
  rating: Star,
  map: Map,
  location: Location,
  schedule: Schedule,
  chat: Chat,
  findDoctor: FindDoctor,
  viewRecords: ViewRecords,
  award: Award,
  lock: Lock,
  verified: Verified,
  check: Check,
  search: Search,
  arrow_l: ArrowLeft,
  home: Home,
  profile: Profile,
  education: Education,
  service: Service,
  time: Time,
  price: Price,
  edit: Edit,
  notification: Notification,
  logout: LogOut,
} as const;

export type IconNameType = keyof typeof iconList;

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
