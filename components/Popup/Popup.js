'use client';
import { useEffect } from 'react';
import styles from './Popup.module.css';

export default function Popup({ close, children }) {
  const closeOnEsc = (evt) => {
    if (evt.key === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeOnEsc);
    return () => {
      window.removeEventListener('keydown', closeOnEsc);
    };
  });

  return (
    <div onClick={close} className={styles.popup}>
      <div onClick={(evt) => evt.stopPropagation()} className={styles.content}>
        {children}
      </div>
    </div>
  );
}
