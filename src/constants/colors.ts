const Colors = {
  background: {
    primary: '#F3F6F4',
    card: '#FFFFFF',
    soft: '#E8F3ED',
    accent: '#0E7A4B',
  },

  text: {
    primary: '#1C1C1C',
    secondary: '#6B7280',
    placeholder: '#9CA3AF',
    inverted: '#FFFFFF',
    badge: '#0E7A4B',
  },

  primary: {
    main: '#0E7A4B',
    light: '#27AE60',
  },
  // base: {
  //   white: '#FFFFFF',
  //   black: '#1C1C1C',
  // },

  // accent: {
  //   rating: '#F2C94C',
  // },
  // error: {
  //   main: '#EB5757',
  // },
  // border: {
  //   default: '#E5E7EB',
  // },
  // icon: {
  //   primary: '#0E7A4B',
  //   secondary: '#6B7280',
  // },
};

const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
  massive: 48,
};

const Typography = {
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
  },

  size: {
    caption: 12,
    xs: 13,
    small: 14,
    body: 16,
    h3: 20,
    h2: 24,
    h1: 32,
  },

  lineHeight: {
    caption: 16,
    small: 20,
    body: 24,
    h3: 28,
    h2: 32,
    h1: 40,
  },
};

const Radius = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 28,
};

export const Theme = {
  colors: Colors,
  spacing: Spacing,
  typography: Typography,
  radius: Radius,
};
