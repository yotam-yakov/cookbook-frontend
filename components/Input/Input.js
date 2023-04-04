import { Fragment } from 'react';
import useValuesStorage from '@/state/useValuesStorage';
import styles from './Input.module.css';

export default function Input({ input }) {
  const { values, handleChange } = useValuesStorage((state) => ({
    values: state.values,
    handleChange: state.handleChange,
  }));

  return (
    <Fragment>
      {input.title && (
        <label htmlFor={input.id} className={styles.label}>
          {input.title}
        </label>
      )}
      <input
        value={values[input.id] || ''}
        type={input.type}
        onChange={handleChange}
        name={input.id}
        id={input.id}
        placeholder={input.placeholder}
        autoComplete='off'
        className={`${styles.input} ${input.style}`}
        {...input.props}
      />
    </Fragment>
  );
}
