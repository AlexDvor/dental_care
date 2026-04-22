import { ImageSourcePropType } from 'react-native';

export interface MessageItemProps {
  avatar: ImageSourcePropType | undefined;
  name: string;
  date: string;
  message: string;
}
