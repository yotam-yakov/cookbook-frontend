import Image from 'next/image';
import styles from './Add.module.css';
import { useState } from 'react';

export default function Add() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <button className={styles.toggle}>
        <Image src='/plus.svg' alt='add recipe button' width={40} height={40} />
      </button>
      <div className={styles.window}>
        <form className={styles.popup}>
          <h2 className={styles.title}>Add Your Own Recipe</h2>
          <label htmlFor='title' className={styles.label}>
            Title
          </label>
          <input
            type='text'
            id='title'
            className={styles.input}
            placeholder='Give your recipe a title'
          />
          <input
            type='number'
            id='time'
            min='5'
            max='240'
            className={styles.input}
          />
          <label htmlFor='time' className={styles.label}>
            Minutes
          </label>
          <div className={styles.inputArray}>
            <input type='text' id='ingredient1' className={styles.input} />
            <input type='text' id='ingredient2' className={styles.input} />
            <input type='text' id='ingredient3' className={styles.input} />
          </div>
        </form>
      </div>
    </div>
  );
}
