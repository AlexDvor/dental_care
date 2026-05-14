import {
  EmailAuthProvider,
  fetchSignInMethodsForEmail,
  FirebaseAuthTypes,
  linkWithCredential,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
} from '@react-native-firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from '@react-native-firebase/firestore';

import { UserProfile } from '../../interfaces/user.types';
import { getAuthInstance, getDb, initializeFirebaseApp } from '../firebase';
import { mapFirebaseAuthError } from './auth.errors';
import {
  AuthUserData,
  CreateUserProfilePayload,
  LoginPayload,
  RegisterPayload,
} from './auth.types';

const USERS_COLLECTION = 'users';

const buildFullName = (firstName: string, secondName: string) =>
  `${firstName.trim()} ${secondName.trim()}`.trim();

export const createUserProfileData = ({
  id,
  firstName,
  secondName,
  email,
  phone,
  phoneVerified,
}: CreateUserProfilePayload): UserProfile => {
  const now = Date.now();

  return {
    id,
    firstName: firstName.trim(),
    secondName: secondName.trim(),
    fullName: buildFullName(firstName, secondName),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    phoneVerified,
    role: 'patient',
    createdAt: now,
    updatedAt: now,
    lastLoginAt: now,
  };
};

export const getCurrentUserProfile = async (
  userId: string,
): Promise<UserProfile | null> => {
  await initializeFirebaseApp();

  const db = getDb();
  const snapshot = await getDoc(doc(db, USERS_COLLECTION, userId));

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as UserProfile;
};

export const saveUserProfile = async (
  payload: CreateUserProfilePayload,
): Promise<UserProfile> => {
  await initializeFirebaseApp();

  const db = getDb();
  const profile = createUserProfileData(payload);

  await setDoc(doc(db, USERS_COLLECTION, profile.id), profile);

  return profile;
};

export const updateLastLoginAt = async (userId: string) => {
  await initializeFirebaseApp();

  const db = getDb();

  await updateDoc(doc(db, USERS_COLLECTION, userId), {
    lastLoginAt: Date.now(),
    updatedAt: Date.now(),
  });
};

export const startRegistrationOtp = async (
  payload: RegisterPayload,
): Promise<FirebaseAuthTypes.ConfirmationResult> => {
  try {
    await initializeFirebaseApp();

    const signInMethods = await fetchSignInMethodsForEmail(
      getAuthInstance(),
      payload.email,
    );

    if (signInMethods.length > 0) {
      throw {
        code: 'auth/email-already-in-use',
      };
    }

    return await signInWithPhoneNumber(getAuthInstance(), payload.phone);
  } catch (error) {
    const authError = mapFirebaseAuthError(error);

    console.error('startRegistrationOtp failed:', error);
    throw authError;
  }
};

export const confirmRegistrationOtp = async ({
  code,
  confirmation,
  payload,
}: {
  code: string;
  confirmation: FirebaseAuthTypes.ConfirmationResult;
  payload: RegisterPayload;
}): Promise<AuthUserData> => {
  try {
    await initializeFirebaseApp();

    const phoneCredential = await confirmation.confirm(code);
    const currentUser = phoneCredential?.user;

    if (!currentUser) {
      throw new Error('User was not created after phone verification.');
    }

    // Firebase creates a phone user after OTP. We link email/password to the
    // same account, so future login can use email while phone stays verified.
    const emailCredential = EmailAuthProvider.credential(
      payload.email,
      payload.password,
    );

    await linkWithCredential(currentUser, emailCredential);

    const profile = await saveUserProfile({
      ...payload,
      id: currentUser.uid,
      phoneVerified: true,
    });

    return { profile };
  } catch (error) {
    const authError = mapFirebaseAuthError(error);

    console.error('confirmRegistrationOtp failed:', error);
    throw authError;
  }
};

export const loginWithEmail = async ({
  email,
  password,
}: LoginPayload): Promise<AuthUserData> => {
  try {
    await initializeFirebaseApp();

    const credential = await signInWithEmailAndPassword(
      getAuthInstance(),
      email,
      password,
    );

    const profile = await getCurrentUserProfile(credential.user.uid);

    if (!profile) {
      throw new Error('User profile was not found.');
    }

    await updateLastLoginAt(credential.user.uid);

    return {
      profile: {
        ...profile,
        lastLoginAt: Date.now(),
      },
    };
  } catch (error) {
    const authError = mapFirebaseAuthError(error);

    console.error('loginWithEmail failed:', error);
    throw authError;
  }
};

export const logout = async () => {
  await initializeFirebaseApp();

  await signOut(getAuthInstance());
};
