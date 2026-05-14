import { z } from 'zod';

export const OTP_CODE_LENGTH = 6;
export const OTP_TIMER_SECONDS = 90;

const NAME_MIN_LENGTH = 2;
const PASSWORD_MIN_LENGTH = 8;
const SPAIN_PHONE_REGEX = /^\+34\d{9}$/;

export const registerSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(NAME_MIN_LENGTH, 'First name must be at least 2 characters.'),
  secondName: z
    .string()
    .trim()
    .min(NAME_MIN_LENGTH, 'Second name must be at least 2 characters.'),
  email: z.string().trim().email('Please enter a valid email.'),
  phone: z
    .string()
    .trim()
    .regex(SPAIN_PHONE_REGEX, 'Use Spanish format, for example +34612345678.'),
  password: z
    .string()
    .min(PASSWORD_MIN_LENGTH, 'Password must be at least 8 characters.'),
});

export const loginSchema = z.object({
  email: z.string().trim().email('Please enter a valid email.'),
  password: z.string().min(1, 'Password is required.'),
});

export const otpSchema = z.object({
  code: z
    .string()
    .regex(
      new RegExp(`^\\d{${OTP_CODE_LENGTH}}$`),
      `Enter the ${OTP_CODE_LENGTH}-digit code.`,
    ),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;
export type OtpFormValues = z.infer<typeof otpSchema>;
