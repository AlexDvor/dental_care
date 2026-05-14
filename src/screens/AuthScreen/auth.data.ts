export const authContent = {
  register: {
    title: 'Create your account',
    description: 'Join your dental clinic in a few simple steps.',
    buttonTitle: 'Create account',
    secondaryText: 'Already have an account?',
    secondaryAction: 'Log in',
    image: require('../../assets/images/auth/register.png'),
  },
  otp: {
    title: 'Verify your phone',
    description: 'Enter the 6-digit code we sent to your number.',
    buttonTitle: 'Confirm code',
    secondaryAction: 'Resend code',
    image: require('../../assets/images/auth/otp.png'),
  },
  login: {
    title: 'Welcome back',
    description: 'Log in to manage visits, reminders, and care notes.',
    buttonTitle: 'Log in',
    forgotPassword: 'Forgot password?',
    secondaryText: 'New here?',
    secondaryAction: 'Create account',
    image: require('../../assets/images/auth/login.png'),
  },
} as const;

export const authFields = {
  firstName: {
    label: 'First name',
    placeholder: 'Enter your first name',
  },
  secondName: {
    label: 'Second name',
    placeholder: 'Enter your second name',
  },
  phone: {
    label: 'Phone number',
    placeholder: '+34612345678',
  },
  email: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
  password: {
    label: 'Password',
    placeholder: 'Enter your password',
  },
} as const;
