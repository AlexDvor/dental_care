import { Theme } from './theme';

type trustBlockItemsType = {
  icon: 'trustVerified' | 'trustEncrypted' | 'trustTopTier';
  label: string;
  subLabel: string;
  bg: string;
  color: string;
};

export const trustBlockItems: trustBlockItemsType[] = [
  {
    icon: 'trustVerified',
    label: 'Verified',
    subLabel: 'Trusted & Secure',
    bg: Theme.colors.background.main,
    color: Theme.colors.icon.primary,
  },
  {
    icon: 'trustEncrypted',
    label: 'Encrypted',
    subLabel: 'Data Protection',
    bg: Theme.colors.background.main,
    color: Theme.colors.icon.blue,
  },
  {
    icon: 'trustTopTier',
    label: 'Top Tier',
    subLabel: 'Premium Quality',
    bg: Theme.colors.background.main,
    color: Theme.colors.icon.purple,
  },
];
