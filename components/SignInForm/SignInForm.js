'use client';
import Form from '@/components/Form/Form';
import useValuesStorage from '@/state/useValuesStorage';
import useUserStorage from '@/state/useUserStorage';
import useMessageStorage from '@/state/useMessageStorage';
import { signIn, getSavedRecipes } from '@/api/cookbook';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const values = useValuesStorage((state) => state.values);
  const logIn = useUserStorage((state) => state.logIn);
  const setMessageProps = useMessageStorage((state) => state.setMessageProps);
  const router = useRouter();

  const submitSignin = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    signIn({
      email: values.email,
      password: values.password,
    })
      .then((data) => {
        Cookies.set('jwt', data.token);
        getSavedRecipes(data.token).then((recipes) => {
          const recipesId = recipes.map((recipe) => recipe.recipeId);
          Cookies.set('savedRecipes', JSON.stringify(recipesId));
        });
      })
      .then(() => {
        setMessageProps({
          message: 'Log In successful! You will now be redirected to homepage',
          isError: false,
          onClose: () => {
            router.push('/');
            logIn();
          },
        });
      })
      .catch((err) => {
        setMessageProps({
          message: err.response ? err.response.data.message : 'Server Error',
          isError: true,
          onClose: () => {},
        });
        console.error(err);
      })
      .finally(() => setIsLoading(false));
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
      url: '/signup',
      text: 'New user? Click here to sign up!',
    },
  };

  return <Form {...signin} />;
}
