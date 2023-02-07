import styles from './Switch.module.css';

export default function Switch({ id, children }) {
  return (
    <label className={styles.switch}>
      <input type='checkbox' id={id} className={styles.checkbox} />
      <span className={styles.slider}>{children}</span>
    </label>
  );
}
