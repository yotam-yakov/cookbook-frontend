import Link from 'next/link';
import styles from './Form.module.css';

export default function Form({ title, submit, inputs, redirect, children }) {
  console.log(redirect);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <form className={styles.form}>
        {inputs.map((input, index) => {
          return (
            <>
              <label htmlFor={input.id} className={styles.label} key={index}>
                {input.title}
              </label>
              <input
                type={input.type}
                id={input.id}
                placeholder={input.placeholder}
                autoComplete='off'
                className={styles.input}
                key={index}
              />
            </>
          );
        })}
        {children}
        <button type='submit' className={styles.submit}>
          {submit}
        </button>
        <Link href={redirect.url} prefetch={false} className={styles.redirect}>
          {redirect.text}
        </Link>
      </form>
    </div>
  );
}
