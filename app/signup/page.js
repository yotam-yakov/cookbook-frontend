import Form from '../../components/Form/Form';

export default function SignUp() {
  const signup = {
    title: 'Sign Up',
    submit: 'Register',
    inputs: [
      {
        id: 'email',
        type: 'text',
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
