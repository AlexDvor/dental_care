export const Palette = {
  green: {
    50: '#F3F6F4',
    100: '#E8F3ED',
    200: '#D1FAE5',
    500: '#27AE60',
    700: '#0E7A4B',
    800: '#1F8A5B',
  },

  gray: {
    200: '#E5E7EB',
    400: '#9CA3AF',
    500: '#6B7280',
    900: '#1C1C1C',
  },

  teal: {
    50: '#E6FFFA',
    500: '#14B8A6',
  },

  purple: {
    50: '#F3E8FF',
    500: '#8B5CF6',
  },

  blue: {
    50: '#EAF2FF',
    500: '#3B82F6',
  },

  yellow: {
    500: '#F2C94C',
  },

  red: {
    500: '#EB5757',
  },

  white: '#FFFFFF',
};

const Colors = {
  background: {
    main: Palette.green[50],
    card: Palette.white,
    soft: Palette.green[100],
    accent: Palette.green[700],
    backTeal: Palette.teal[50],
    backPurple: Palette.purple[50],
    backBlue: Palette.blue[50],
  },
  text: {
    primary: Palette.gray[900],
    secondary: Palette.gray[500],
    placeholder: Palette.gray[400],
    inverted: Palette.white,
    badge: Palette.green[700],
    invertedBadge: Palette.green[200],
  },

  icon: {
    primary: Palette.green[700],
    secondary: Palette.gray[500],
    teal: Palette.teal[500],
    purple: Palette.purple[500],
    blue: Palette.blue[500],
  },

  statusBar: {
    primary: Palette.green[50],
    secondary: Palette.green[800],
  },

  border: {
    default: Palette.gray[200],
    primary: Palette.green[700],
  },

  status: {
    success: Palette.green[700],
    warning: Palette.yellow[500],
    error: Palette.red[500],
    info: Palette.blue[500],
  },
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

const Shadow = {
  primary: {
    shadowColor: Palette.gray[900],
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  // small: {
  //   shadowColor: Palette.gray[900],
  //   shadowOpacity: 0.04,
  //   shadowRadius: 6,
  //   shadowOffset: { width: 0, height: 2 },
  //   elevation: 2,
  // },

  // medium: {
  //   shadowColor: Palette.gray[900],
  //   shadowOpacity: 0.08,
  //   shadowRadius: 16,
  //   shadowOffset: { width: 0, height: 6 },
  //   elevation: 4,
  // },
  // large: {
  //   shadowColor: Palette.gray[900],
  //   shadowOpacity: 0.12,
  //   shadowRadius: 24,
  //   shadowOffset: { width: 0, height: 10 },
  //   elevation: 8,
  // },
};

export const Theme = {
  colors: Colors,
  spacing: Spacing,
  typography: Typography,
  radius: Radius,
  shadow: Shadow,
};
