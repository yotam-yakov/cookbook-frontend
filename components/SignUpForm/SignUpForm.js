'use client';
import Form from '@/components/Form/Form';
import useValuesStorage from '@/state/useValuesStorage';
import useMessageStorage from '@/state/useMessageStorage';
import { signUp } from '@/api/cookbook/api';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const values = useValuesStorage((state) => state.values);
  const setMessageProps = useMessageStorage((state) => state.setMessageProps);
  const router = useRouter();

  const submitSignup = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    signUp({
      email: values.email,
      name: values.username,
      password: values.password,
    })
      .then(() =>
        setMessageProps({
          message:
            'Sign up successful, You will now be redirected to sign in page',
          isError: false,
          onClose: () => router.push('/signin'),
        })
      )
      .catch((err) => {
        setMessageProps({
          message: err.response ? err.response.data.message : 'Server Error',
          isError: false,
          onClose: () => {},
        });
        console.error(err);
      })
      .finally(() => setIsLoading(false));
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
    isLoading,
    redirect: {
      url: '/signin',
      text: 'Already a member? Click here to sign in!',
    },
  };

  return <Form {...signup} />;
}
