import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { AuthError, LoginPayload, RegisterPayload } from '../api/auth/auth.types';
import { UserProfile } from '../interfaces/user.types';

export type Theme = 'light' | 'dark';

export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

export type AuthContextValue = {
  firebaseUser: FirebaseAuthTypes.User | null;
  userProfile: UserProfile | null;
  isAuthenticated: boolean;
  isInitializing: boolean;
  isSubmitting: boolean;
  authError: AuthError | null;
  startRegistration: (payload: RegisterPayload) => Promise<void>;
  confirmRegistrationCode: (code: string) => Promise<void>;
  resendRegistrationCode: () => Promise<void>;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => Promise<void>;
  clearAuthError: () => void;
};
