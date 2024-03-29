'use client';
import Form from '@/components/Form/Form';
import useValuesStorage from '@/state/useValuesStorage';
import useMessageStorage from '@/state/useMessageStorage';
import { sendFeedback } from '@/api/cookbook';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FeedbackForm() {
  const [isLoading, setIsLoading] = useState(false);
  const values = useValuesStorage((state) => state.values);
  const setMessageProps = useMessageStorage((state) => state.setMessageProps);
  const router = useRouter();

  const submitFeedback = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    sendFeedback({
      email: values.email,
      title: values.title,
      text: values.text,
    })
      .then(() => {
        setMessageProps({
          message:
            'Thanks for your feedback! You are now redirected to the homepage',
          isError: false,
          onClose: () => router.push('/'),
        });
      })
      .catch((err) => {
        setMessageProps({
          message: `The request returned an error, try again later. Message: '${
            err.response ? err.response.data.message : 'Client Side Error'
          }'`,
          isError: true,
          onClose: () => {},
        });
        console.error(err);
      })
      .finally(() => setIsLoading(false));
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
