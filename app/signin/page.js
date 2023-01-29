import '../globals.css';
import Form from '../../components/Form/Form';

export default function SignUp() {
  const signin = {
    title: 'Sign In',
    submit: 'Log In',
    inputs: [
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
  };

  return <Form {...signin} />;
}