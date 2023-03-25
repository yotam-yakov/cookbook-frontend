import styles from './Switch.module.css';

export default function Switch({ id, onChange, children }) {
  return (
    <label className={styles.switch}>
      <input
        type='checkbox'
        id={id}
        name={id}
        onChange={onChange}
        className={styles.checkbox}
      />
      <span className={styles.slider}>{children}</span>
    </label>
  );
}
