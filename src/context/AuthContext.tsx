import { createContext, ReactNode, useEffect, useState } from 'react';

import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { onAuthStateChanged } from '@react-native-firebase/auth';

import {
  confirmRegistrationOtp,
  getCurrentUserProfile,
  loginWithEmail,
  logout as logoutFromFirebase,
  startRegistrationOtp,
} from '../api/auth/auth.api';
import { mapFirebaseAuthError } from '../api/auth/auth.errors';
import { AuthError, RegisterPayload } from '../api/auth/auth.types';
import { getAuthInstance, initializeFirebaseApp } from '../api/firebase';
import { UserProfile } from '../interfaces/user.types';
import { AuthContextValue } from './types';

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [firebaseUser, setFirebaseUser] =
    useState<FirebaseAuthTypes.User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState<AuthError | null>(null);

  const [pendingRegistration, setPendingRegistration] =
    useState<RegisterPayload | null>(null);
  const [otpConfirmation, setOtpConfirmation] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;
    let isMounted = true;

    const startAuthListener = async () => {
      await initializeFirebaseApp();

      if (!isMounted) {
        return;
      }

      unsubscribe = onAuthStateChanged(getAuthInstance(), async user => {
        setFirebaseUser(user);

        if (!user) {
          setUserProfile(null);
          setIsInitializing(false);
          return;
        }

        const profile = await getCurrentUserProfile(user.uid);
        setUserProfile(profile);
        setIsInitializing(false);
      });
    };

    startAuthListener().catch(error => {
      setAuthError(mapFirebaseAuthError(error));
      setIsInitializing(false);
    });

    return () => {
      isMounted = false;
      unsubscribe?.();
    };
  }, []);

  const clearAuthError = () => {
    setAuthError(null);
  };

  const startRegistration = async (payload: RegisterPayload) => {
    setIsSubmitting(true);
    clearAuthError();

    try {
      const confirmation = await startRegistrationOtp(payload);
      // We keep registration data only in memory until phone OTP is confirmed.
      setPendingRegistration(payload);
      setOtpConfirmation(confirmation);
    } catch (error) {
      setAuthError(mapFirebaseAuthError(error));
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const confirmRegistrationCode = async (code: string) => {
    if (!pendingRegistration || !otpConfirmation) {
      const error = {
        code: 'auth/missing-registration',
        message: 'Registration session expired. Please start again.',
      };

      setAuthError(error);
      throw error;
    }

    setIsSubmitting(true);
    clearAuthError();

    try {
      const data = await confirmRegistrationOtp({
        code,
        confirmation: otpConfirmation,
        payload: pendingRegistration,
      });

      setUserProfile(data.profile);
      setPendingRegistration(null);
      setOtpConfirmation(null);
    } catch (error) {
      setAuthError(mapFirebaseAuthError(error));
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resendRegistrationCode = async () => {
    if (!pendingRegistration) {
      const error = {
        code: 'auth/missing-registration',
        message: 'Registration session expired. Please start again.',
      };

      setAuthError(error);
      throw error;
    }

    setIsSubmitting(true);
    clearAuthError();

    try {
      const confirmation = await startRegistrationOtp(pendingRegistration);
      setOtpConfirmation(confirmation);
    } catch (error) {
      setAuthError(mapFirebaseAuthError(error));
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const login = async (payload: { email: string; password: string }) => {
    setIsSubmitting(true);
    clearAuthError();

    try {
      const data = await loginWithEmail(payload);
      setUserProfile(data.profile);
    } catch (error) {
      setAuthError(mapFirebaseAuthError(error));
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const logout = async () => {
    setIsSubmitting(true);
    clearAuthError();

    try {
      await logoutFromFirebase();
      setUserProfile(null);
      setPendingRegistration(null);
      setOtpConfirmation(null);
    } catch (error) {
      setAuthError(mapFirebaseAuthError(error));
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        firebaseUser,
        user: userProfile,
        userProfile,
        isAuthenticated: !!firebaseUser && !!userProfile,
        isInitializing,
        isSubmitting,
        authError,
        startRegistration,
        confirmRegistrationCode,
        resendRegistrationCode,
        login,
        logout,
        clearAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
