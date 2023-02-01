'use client';
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
        {children}
      </div>
    </div>
  );
}
