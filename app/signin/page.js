'use client';
import { useRouter } from 'next/navigation';
import Form from '../../components/Form/Form';
import { signIn } from '../../api/cookbook/api';
import useValuesStorage from '../../state/useValuesStorage';
import useUserStorage from '../../state/useUserStorage';
import cookies from 'cookie-cutter';

export default function SignIn() {
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
        cookies.set('jwt', token);
        localStorage.setItem('jwt', token);
        router.push('/');
        logIn();
      })
      .catch((err) => console.error(err.response.data.message));
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
        type: 'text',
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

  return <Form {...signin} />;
}
