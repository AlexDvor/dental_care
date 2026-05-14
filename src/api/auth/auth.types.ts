import { UserProfile } from '../../interfaces/user.types';

export type RegisterPayload = {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthError = {
  code: string;
  message: string;
  field?: keyof RegisterPayload | keyof LoginPayload | 'code';
};

export type CreateUserProfilePayload = RegisterPayload & {
  id: string;
  phoneVerified: boolean;
};

export type AuthUserData = {
  profile: UserProfile;
};
