'use client';
import Form from '@/components/Form/Form';
import useValuesStorage from '@/state/useValuesStorage';
import useUserStorage from '@/state/useUserStorage';
import useMessageStorage from '@/state/useMessageStorage';
import { signIn, getSavedRecipes } from '@/api/cookbook/api';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const values = useValuesStorage((state) => state.values);
  const logIn = useUserStorage((state) => state.logIn);
  const setMessageProps = useMessageStorage((state) => state.setMessageProps);
  const router = useRouter();

  const submitSignin = (evt) => {
    evt.preventDefault();

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
          message: err.response ? err.response.data.message : 'Unknown Error',
          isError: true,
          onClose: () => {},
        });
        console.error(err);
      });
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
    redirect: {
      url: '/signup',
      text: 'New user? Click here to sign up!',
    },
  };

  return <Form {...signin} />;
}
