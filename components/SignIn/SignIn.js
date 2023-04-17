'use client';
import { useRouter } from 'next/navigation';
import Form from '@/components/Form/Form';
import useValuesStorage from '@/state/useValuesStorage';
import useUserStorage from '@/state/useUserStorage';
import { signIn, getSavedRecipes } from '@/api/cookbook/api';
import Cookies from 'js-cookie';

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
        getSavedRecipes(token).then((recipes) => {
          let recipesId = [];
          recipes.forEach((recipe) => {
            recipesId.push(recipe.recipeId);
          });
          Cookies.set('savedRecipes', JSON.stringify(recipesId));
        });
        Cookies.set('jwt', token);
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
