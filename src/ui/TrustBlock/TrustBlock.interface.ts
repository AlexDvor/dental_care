import { IconName } from '../Icon/Icon.interface';

export type Item = {
  icon: IconName;
  label: string;
  subLabel?: string;
  color?: string;
  bg?: string;
};

export interface TrustBlockProps {
  items: Item[];
  brandName: string;
  description: string;
  onPrivacyPress: () => void;
  onTermsPress: () => void;
}
