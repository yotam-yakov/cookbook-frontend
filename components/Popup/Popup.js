import styles from './Popup.module.css';

export default function Popup({ children }) {
  return (
    <div className={styles.popup}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
