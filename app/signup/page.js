'use client';
import Form from '../../components/Form/Form';
import useValuesStorage from '@/state/useValuesStorage';
import { signUp } from '../../api/cookbook/api';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const values = useValuesStorage((state) => state.values);
  const router = useRouter();

  const submitSignup = () => {
    signUp({
      email: values.email,
      name: values.username,
      password: values.password,
    })
      .then(() => router.push('/signin'))
      .catch((err) => console.error(err));
  };

  const signup = {
    title: 'Sign Up',
    submit: {
      text: 'Register',
      handler: submitSignup,
    },
    inputs: [
      {
        id: 'email',
        type: 'email',
        placeholder: 'Email',
      },
      {
        id: 'username',
        type: 'text',
        placeholder: 'Username',
      },
      {
        id: 'password',
        type: 'password',
        placeholder: 'Password',
      },
    ],
    redirect: {
      url: '/signin',
      text: 'Already a member? Click here to sign in!',
    },
  };

  return <Form {...signup} />;
}
