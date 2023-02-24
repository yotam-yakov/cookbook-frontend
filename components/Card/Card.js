'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useRecipeStorage from '../../state/useRecipeStorage';
import useUserStorage from '../../state/useUserStorage';
import styles from './Card.module.css';

export default function Card({ recipe }) {
  const [isActive, setIsActive] = useState(false);
  const setRecipe = useRecipeStorage((State) => State.setRecipe);
  const isLoggedIn = useUserStorage((state) => state.isLoggedIn);
  const router = useRouter();

  const toggleActive = (evt) => {
    evt.stopPropagation();
    if (isLoggedIn) {
      setIsActive(!isActive);
    } else {
      router.push('/signin');
    }
  };

  const openRecipe = () => {
    setRecipe(recipe);
  };

  return (
    <div onClick={openRecipe} className={styles.container}>
      <h2 className={styles.title}>{recipe.title}</h2>
      <Image
        src={recipe.image}
        alt='Recipe image'
        width={264}
        height={120}
        className={styles.image}
      />
      <p className={styles.time}>
        <Image
          src='/clock.svg'
          alt='Time icon'
          width={24}
          height={24}
          className={styles.clock}
        />
        {recipe.time}
      </p>
      <p className={styles.source}>{recipe.source}</p>
      <Image
        src='/dairy.svg'
        alt='Dairy icon'
        width={32}
        height={32}
        className={`${styles.diet} ${recipe.dairy && styles.dietActive}`}
      />
      <Image
        src='/gluten.svg'
        alt='Gluten icon'
        width={32}
        height={32}
        className={`${styles.diet} ${recipe.gluten && styles.dietActive}`}
      />
      <Image
        src='/vegan.svg'
        alt='Vegan icon'
        width={32}
        height={32}
        className={`${styles.diet} ${recipe.vegan && styles.dietActive}`}
      />
      <Image
        src='/vegetarian.svg'
        alt='Vegetarian icon'
        width={32}
        height={32}
        className={`${styles.diet} ${recipe.vegetarian && styles.dietActive}`}
      />
      <button
        type='button'
        onClick={toggleActive}
        className={`${styles.button} ${isActive && styles.buttonActive}`}
      >
        <Image
          src='/plus.svg'
          alt='Add button'
          width={32}
          height={32}
          className={styles.plus}
        />
        {!isLoggedIn && <p className={styles.tooltip}>Log in to save</p>}
      </button>
    </div>
  );
}
