'use client';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import styles from './InputArray.module.css';

export default function InputArray({ element, title, max }) {
  const [inputs, setInputs] = useState(3);

  const addInput = () => {
    if (inputs < max) {
      setInputs(inputs + 1);
    }
  };

  const removeInput = () => {
    if (inputs != 1) {
      setInputs(inputs - 1);
    }
  };

  return (
    <div className={styles.inputArray}>
      <h3 className={styles.title}>{title}</h3>
      {[...Array(inputs)].map((e, i) => {
        return <Fragment key={i}>{element(i)}</Fragment>;
      })}
      <div>
        <button
          type='button'
          onClick={removeInput}
          className={`${styles.addButton} ${
            inputs === 1 && styles.addButtonDisabled
          }`}
        >
          <Image
            src='/minus.svg'
            alt='remove input slot button'
            width={24}
            height={24}
          />
        </button>
        <button
          type='button'
          onClick={addInput}
          className={`${styles.addButton} ${
            inputs === max && styles.addButtonDisabled
          }`}
        >
          <Image
            src='/plus.svg'
            alt='add input slot button'
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
