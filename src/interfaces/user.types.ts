export type UserRole = 'patient';

export type UserProfile = {
  id: string;
  firstName: string;
  secondName: string;
  fullName: string;
  email: string;
  phone: string;
  image: string | null;
  phoneVerified: boolean;
  role: UserRole;
  createdAt: number;
  updatedAt: number;
  lastLoginAt?: number;
};
