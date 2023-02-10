import '../globals.css';
import Form from '../../components/Form/Form';
import styles from './Feedback.module.css';

export default function Feedback() {
  const feedback = {
    title: 'Tell us your thoughts',
    submit: 'Send',
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

  console.log(styles.title);
  return <Form {...feedback} />;
}