'use client';
import Form from '@/components/Form/Form';
import Message from '@/components/Message/Message';
import useValuesStorage from '@/state/useValuesStorage';
import useMessageStorage from '@/state/useMessageStorage';
import { signUp } from '@/api/cookbook/api';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';

export default function SignUp() {
  const values = useValuesStorage((state) => state.values);
  const { isMessageOpen, setMessageProps } = useMessageStorage((state) => ({
    isMessageOpen: state.isMessageOpen,
    setMessageProps: state.setMessageProps,
  }));
  const router = useRouter();

  const submitSignup = () => {
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
          message: err.response.data.message,
          isError: false,
          onClose: () => {},
        });
        console.error(err);
      });
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

  return (
    <Fragment>
      {isMessageOpen && <Message />}
      <Form {...signup} />
    </Fragment>
  );
}
