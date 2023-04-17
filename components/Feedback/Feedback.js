'use client';
import Form from '@/components/Form/Form';
import useValuesStorage from '@/state/useValuesStorage';

export default function Feedback() {
  const values = useValuesStorage((state) => state.values);

  const submitFeedback = (evt) => {
    evt.preventDefault();
    console.log(values);
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
        type: 'text',
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
