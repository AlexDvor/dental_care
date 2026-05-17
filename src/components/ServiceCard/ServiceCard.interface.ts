import { ImageSourcePropType } from 'react-native';

export type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: ImageSourcePropType;
  selected?: boolean;
  onPress: (id: string) => void;
};
