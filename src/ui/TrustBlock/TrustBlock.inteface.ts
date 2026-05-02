export type Item = {
  icon: string;
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
