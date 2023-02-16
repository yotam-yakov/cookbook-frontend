import { Fragment } from 'react';
import styles from './Input.module.css';

export default function Input({ input, index }) {
  return (
    <Fragment>
      {input.title && (
        <label htmlFor={input.id} className={styles.label} key={index}>
          {input.title}
        </label>
      )}
      <input
        type={input.type}
        id={input.id}
        placeholder={input.placeholder}
        autoComplete='off'
        className={`${styles.input} ${input.style}`}
        key={index}
      />
    </Fragment>
  );
}
