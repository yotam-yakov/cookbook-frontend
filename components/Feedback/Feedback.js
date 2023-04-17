'use client';
import Form from '@/components/Form/Form';
import useValuesStorage from '@/state/useValuesStorage';
import { sendFeedback } from '@/api/cookbook/api';
import { useRouter } from 'next/navigation';

export default function Feedback() {
  const values = useValuesStorage((state) => state.values);
  const router = useRouter();

  const submitFeedback = (evt) => {
    evt.preventDefault();
    sendFeedback({
      email: values.email,
      title: values.title,
      text: values.text,
    })
      .then(() => router.push('/'))
      .catch((err) => console.error(err));
  };
  const feedback = {
    title: 'Tell us your thoughts',
    submit: {
      text: 'Send',
      handler: submitFeedback,
    },
    inputs: [
      {
        id: 'email',
        title: 'Email',
        type: 'email',
        placeholder: 'Email',
        props: {
          required: true,
        },
      },
      {
        id: 'title',
        title: 'Feedback',
        type: 'text',
        placeholder: 'Title',
        props: {
          required: true,
        },
      },
      {
        id: 'text',
        title: '',
        type: 'text',
        placeholder: 'Text',
        props: {
          required: true,
        },
      },
    ],
    redirect: {
      url: '/',
      text: 'Changed your mind? Go back to homepage',
    },
  };

  return <Form {...feedback} />;
}
