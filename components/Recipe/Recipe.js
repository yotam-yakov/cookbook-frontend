'use client';
import Popup from '../Popup/Popup';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Recipe.module.css';

export default function Recipe({
  title,
  image,
  time,
  source,
  dairy,
  gluten,
  vegan,
  vegetarian,
  ingredients,
  steps,
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Popup>
      <div className={styles.container}>
        <div className={styles.imageBox}>
          <Image src={image} alt='recipe image' fill className={styles.image} />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.source}>{source}</p>
        <p className={styles.time}>{time}</p>
        <div className={styles.diets}>
          <p className={styles.diet}>is dairy?</p>
          <p className={styles.diet}>is dairy?</p>
          <p className={styles.diet}>is dairy?</p>
          <p className={styles.diet}>is dairy?</p>
        </div>
        <p>{steps}</p>
      </div>
    </Popup>
  );
}
