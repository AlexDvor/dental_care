type Item = {
  label: string;
  icon: keyof typeof import('../Icon/Icon').iconList;
  color?: string;
};

export interface TrustBlockProps {
  items: Item[];
  brandName: string;
  description: string;
  onPrivacyPress: () => void;
  onTermsPress: () => void;
}
