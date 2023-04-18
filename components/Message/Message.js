import useMessageStorage from '@/state/useMessageStorage';
import Popup from '../Popup/Popup';
import styles from './Message.module.css';

export default function Message() {
  const messageProps = useMessageStorage((state) => state.messageProps);
  return (
    <Popup onClose={messageProps.onClose}>
      <div className={styles.container}>
        <h1
          className={`${styles.message} ${
            messageProps.isError && styles.error
          }`}
        >
          {messageProps.message}
        </h1>
        <button
          type='button'
          onClick={messageProps.onClose}
          className={styles.button}
        >
          OK
        </button>
      </div>
    </Popup>
  );
}
