import AuthForm from '@/components/AuthForm/AuthForm';

export const metadata = {
  title: 'Sign In',
  description: 'Sign in page for Cookbook app',
};

export default function SignIn() {
  return <AuthForm type='signin' />;
}
