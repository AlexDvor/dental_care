import { IconNameType } from '../../ui/Icon/Icon';

export type PromoBannerProps = {
  title: string;
  description: string;
  buttonText: string;
  onPress: () => void;
  icon?: IconNameType;
  expiresAt?: Date;
  expiresIn?: number;
  backgroundColor?: string;
  borderColor?: string;
};
