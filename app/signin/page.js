import AuthForm from '@/components/AuthForm/AuthForm';

export const metadata = {
  title: 'Sign In',
};

export default function SignIn() {
  return <AuthForm type='signin' />;
}
