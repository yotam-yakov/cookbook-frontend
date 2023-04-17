'use client';
import { useRouter } from 'next/navigation';
import Form from '@/components/Form/Form';
import useValuesStorage from '@/state/useValuesStorage';
import { signUp } from '@/api/cookbook/api';

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
        props: {
          required: true,
        },
      },
      {
        id: 'username',
        type: 'text',
        placeholder: 'Username',
        props: {
          required: true,
        },
      },
      {
        id: 'password',
        type: 'password',
        placeholder: 'Password',
        props: {
          required: true,
          minLength: 8,
        },
      },
    ],
    redirect: {
      url: '/signin',
      text: 'Already a member? Click here to sign in!',
    },
  };

  return <Form {...signup} />;
}
