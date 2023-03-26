import Form from '../../components/Form/Form';
import styles from './Feedback.module.css';

export const metadata = {
  title: 'Send Feedback',
};

export default function Feedback() {
  const feedback = {
    title: 'Tell us your thoughts',
    submit: {
      text: 'Send',
    },
    inputs: [
      {
        id: 'email',
        title: 'Email',
        type: 'text',
        placeholder: 'Email',
        style: styles.input,
      },
      {
        id: 'title',
        title: 'Feedback',
        type: 'text',
        placeholder: 'Title',
        style: styles.input,
      },
      {
        id: 'text',
        title: '',
        type: 'textarea',
        placeholder: 'Text',
        style: styles.text,
      },
    ],
    redirect: {
      url: '/',
      text: 'Changed your mind? Go back to homepage',
    },
  };

  return <Form {...feedback} />;
}
