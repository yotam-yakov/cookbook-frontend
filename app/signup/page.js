import AuthForm from '@/components/AuthForm/AuthForm';

export const metadata = {
  title: 'Sign Up',
  description: 'Sign up page for Cookbook app',
};

export default function SignIn() {
  return <AuthForm type='signup' />;
}
