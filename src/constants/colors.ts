// export const Colors = {
//   base: {
//     white: '#FFFFFF',
//     dark: '#0F172A',
//   },

//   background: {
//     primary: '#F8FAFC',
//     secondary: '#FFFFFF',
//     dark: '#0F172A',
//     muted: '#F2F2F2',
//   },

//   surface: {
//     card: '#FFFFFF',
//     input: '#F1F5F9',
//     muted: '#E2E8F0',
//   },

//   button: {
//     secondary: '#058AFF14',
//   },

//   text: {
//     primary: '#0F172A',
//     secondary: '#64748B',
//     placeholder: '#94A3B8',
//     inverted: '#FFFFFF',
//     icon: '#058aff',
//   },

//   primary: {
//     main: '#0C6CF2',
//     light: '#0284C7',
//     dark: '#0A2540',
//   },

//   success: {
//     main: '#22C55E',
//     background: '#C6FFDA',
//   },

//   error: {
//     main: '#FF0000',
//   },

//   border: {
//     default: '#E2E8F0',
//   },

//   icon: {
//     default: '#64748B',
//     active: '#0C6CF2',
//   },

// };

const Colors = {
  background: {
    primary: '#F3F6F4',
    card: '#FFFFFF',
    soft: '#E8F3ED',
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
