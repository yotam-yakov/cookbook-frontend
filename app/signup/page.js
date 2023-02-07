import '../globals.css';
import Form from '../../components/Form/Form';

export default function SignUp() {
  const signup = {
    title: 'Sign Up',
    submit: 'Register',
    inputs: [
      {
        id: 'email',
        title: 'Email',
        type: 'text',
        placeholder: 'Email',
      },
      {
        id: 'username',
        title: 'Username',
        type: 'text',
        placeholder: 'Username',
      },
      {
        id: 'password',
        title: 'Password',
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
