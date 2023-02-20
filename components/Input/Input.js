import { Fragment } from 'react';
import styles from './Input.module.css';

export default function Input({ input }) {
  return (
    <Fragment>
      {input.title && (
        <label htmlFor={input.id} className={styles.label}>
          {input.title}
        </label>
      )}
      <input
        type={input.type}
        id={input.id}
        placeholder={input.placeholder}
        autoComplete='off'
        className={`${styles.input} ${input.style}`}
      />
    </Fragment>
  );
}
