import '../globals.css';
import Form from '../../components/Form/Form';

export default function SignIn() {
  const signin = {
    title: 'Sign In',
    submit: 'Log In',
    inputs: [
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
      url: '/signup',
      text: 'New user? Click here to sign up!',
    },
  };

  return <Form {...signin} />;
}
