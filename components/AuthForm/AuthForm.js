'use client';
import { useRouter } from 'next/navigation';
import Form from '@/components/Form/Form';
import useValuesStorage from '@/state/useValuesStorage';
import useUserStorage from '@/state/useUserStorage';
import { signIn } from '@/api/cookbook/api';
import Cookies from 'js-cookie';

export default function AuthForm({ type }) {
  const values = useValuesStorage((state) => state.values);
  const logIn = useUserStorage((state) => state.logIn);
  const router = useRouter();

  const submitSignin = (evt) => {
    evt.preventDefault();

    signIn({
      email: values.email,
      password: values.password,
    })
      .then((token) => {
        Cookies.set('jwt', token);
        router.push('/');
        logIn();
      })
      .catch((err) => console.error(err.response.data.message));
  };
  const submitSignup = () => {
    signUp({
      email: values.email,
      name: values.username,
      password: values.password,
    })
      .then(() => router.push('/signin'))
      .catch((err) => console.error(err));
  };

  const signin = {
    title: 'Sign In',
    submit: {
      text: 'Log In',
      handler: submitSignin,
    },
    inputs: [
      {
        id: 'email',
        type: 'email',
        placeholder: 'Email',
      },
      {
        id: 'password',
        type: 'password',
        placeholder: 'Password',
        props: {
          minLength: 8,
        },
      },
    ],
    redirect: {
      url: '/signup',
      text: 'New user? Click here to sign up!',
    },
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

  switch (type) {
    case 'signin':
      return <Form {...signin} />;
    case 'signup':
      return <Form {...signup} />;
    default:
      return <h1>Error creating form</h1>;
  }
}
