import Link from 'next/link';
import Input from '../Input/Input';
import styles from './Form.module.css';

export default function Form({ title, submit, inputs, redirect, children }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <form onSubmit={submit.handler} className={styles.form}>
        {inputs.map((input, index) => {
          return <Input input={input} key={index} />;
        })}
        {children}
        <button type='submit' className={styles.submit}>
          {submit.text}
        </button>
        {redirect && (
          <Link
            href={redirect.url}
            prefetch={false}
            className={styles.redirect}
          >
            {redirect.text}
          </Link>
        )}
      </form>
    </div>
  );
}
