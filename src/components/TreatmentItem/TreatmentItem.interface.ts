import { ImageSourcePropType } from 'react-native';

export interface TreatmentItemProps {
  id: number;
  name: string;
  image: ImageSourcePropType | undefined;
}
