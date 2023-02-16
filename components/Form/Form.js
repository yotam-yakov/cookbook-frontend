import Link from 'next/link';
import Input from '../Input/Input';
import styles from './Form.module.css';

export default function Form({ title, submit, inputs, redirect, children }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <form className={styles.form}>
        {inputs.map((input, index) => {
          return (
            <Input input={input} index={index} />
            // <>
            //   <label htmlFor={input.id} className={styles.label} key={index}>
            //     {input.title}
            //   </label>
            //   <input
            //     type={input.type}
            //     id={input.id}
            //     placeholder={input.placeholder}
            //     autoComplete='off'
            //     className={`${styles.input} ${input.style}`}
            //     key={index}
            //   />
            // </>
          );
        })}
        {children}
        <button type='submit' className={styles.submit}>
          {submit}
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
