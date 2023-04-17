import Popup from '../Popup/Popup';
import styles from './Message.module.css';

export default function Message({ children, onClose, isError }) {
  return (
    <Popup onClose={onClose}>
      <div className={styles.container}>
        <h1 className={`${styles.message} ${isError && styles.error}`}>
          {children}
        </h1>
        <button type='button' onClick={onClose} className={styles.button}>
          OK
        </button>
      </div>
    </Popup>
  );
}
