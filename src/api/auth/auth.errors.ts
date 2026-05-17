import { AuthError } from './auth.types';

const DEFAULT_AUTH_ERROR: AuthError = {
  code: 'auth/unknown',
  message: 'Something went wrong. Please try again.',
};

export const mapFirebaseAuthError = (error: unknown): AuthError => {
  const firebaseError = error as { code?: string; message?: string };
  const errorMessage = firebaseError.message || DEFAULT_AUTH_ERROR.message;

  switch (firebaseError.code) {
    case 'auth/email-already-in-use':
      return {
        code: firebaseError.code,
        field: 'email',
        message: 'This email is already used.',
      };

    case 'auth/invalid-email':
      return {
        code: firebaseError.code,
        field: 'email',
        message: 'Please enter a valid email.',
      };

    case 'auth/weak-password':
      return {
        code: firebaseError.code,
        field: 'password',
        message: 'Password is too weak.',
      };

    case 'auth/invalid-phone-number':
      return {
        code: firebaseError.code,
        field: 'phone',
        message: 'Please enter a valid phone number.',
      };

    case 'auth/too-many-requests':
      return {
        code: firebaseError.code,
        message: 'Too many attempts. Please try again later.',
      };

    case 'auth/operation-not-allowed':
      return {
        code: firebaseError.code,
        message: 'Phone sign-in is not enabled in Firebase Console.',
      };

    case 'auth/app-not-authorized':
      return {
        code: firebaseError.code,
        message:
          'This Android app is not authorized in Firebase. Check google-services.json and SHA keys.',
      };

    case 'auth/invalid-app-credential':
      return {
        code: firebaseError.code,
        message:
          'Firebase could not verify this app. Check Android SHA keys and Firebase phone auth setup.',
      };

    case 'auth/missing-client-identifier':
      return {
        code: firebaseError.code,
        message:
          'Firebase is missing Android app configuration. Add google-services.json.',
      };

    case 'auth/network-request-failed':
      return {
        code: firebaseError.code,
        message: 'Network error. Please check your internet connection.',
      };

    case 'auth/quota-exceeded':
      return {
        code: firebaseError.code,
        message: 'SMS quota exceeded. Please try again later.',
      };

    case 'auth/billing-not-enabled':
    case 'BILLING_NOT_ENABLED':
      return {
        code: firebaseError.code,
        message:
          'Firebase SMS requires billing to be enabled. Use a Firebase test phone number or enable billing in Firebase Console.',
      };

    case 'auth/invalid-verification-code':
      return {
        code: firebaseError.code,
        field: 'code',
        message: 'The verification code is incorrect.',
      };

    case 'auth/code-expired':
      return {
        code: firebaseError.code,
        field: 'code',
        message: 'The verification code expired. Send a new one.',
      };

    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return {
        code: firebaseError.code,
        message: 'Email or password is incorrect.',
      };

    default:
      return {
        code: firebaseError.code || DEFAULT_AUTH_ERROR.code,
        message: errorMessage,
      };
  }
};
