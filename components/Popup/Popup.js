import Image from 'next/image';
import { useEffect } from 'react';
import styles from './Popup.module.css';

export default function Popup({ onClose, children }) {
  const closeOnEsc = (evt) => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeOnEsc);
    return () => {
      window.removeEventListener('keydown', closeOnEsc);
    };
  });

  return (
    <div onClick={onClose} className={styles.popup}>
      <div onClick={(evt) => evt.stopPropagation()} className={styles.content}>
        <button type='button' onClick={onClose} className={styles.close}>
          <Image
            src='/plus.svg'
            alt='close popup'
            width={18}
            height={18}
            className={styles.closeImage}
          />
        </button>
        {children}
      </div>
    </div>
  );
}
