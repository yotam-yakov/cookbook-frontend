import AuthForm from '@/components/AuthForm/AuthForm';

export const metadata = {
  title: 'Sign Up',
};

export default function SignIn() {
  return <AuthForm type='signup' />;
}
