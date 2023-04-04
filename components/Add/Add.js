import { useState } from 'react';
import Image from 'next/image';
import styles from './Add.module.css';
import RecipeForm from '../RecipeForm/RecipeForm';

export default function Add() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={styles.add}>
      <button onClick={() => setIsPopupOpen(true)} className={styles.toggle}>
        <Image src='/plus.svg' alt='add recipe button' width={40} height={40} />
      </button>
      {isPopupOpen && <RecipeForm onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
}
