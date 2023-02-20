'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Search.module.css';
import useValuesStorage from '../../state/useValuesStorage';

export default function Search() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { values, handleChange } = useValuesStorage((state) => ({
    values: state.values,
    handleChange: state.handleChange,
  }));

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className={styles.search}>
      <form className={styles.form}>
        <input
          value={values.search || ''}
          onChange={handleChange}
          type='text'
          id='search'
          name='search'
          placeholder='I am hungry...'
          autoComplete='off'
          className={styles.query}
          required
        />
        <button type='button' onClick={toggleFilter} className={styles.button}>
          <Image src='/filter.svg' alt='Filter icon' width={28} height={28} />
        </button>
        <button type='submit' className={styles.button}>
          <Image src='/search.svg' alt='Search icon' width={44} height={44} />
        </button>
        <div
          className={`${styles.filter} ${isFilterOpen && styles.filterOpen}`}
        >
          <label htmlFor='time' className={styles.label}>
            <Image
              src='/clock.svg'
              alt='Time icon'
              width={32}
              height={32}
              className={styles.icon}
            />
            Max Time to make
          </label>
          <input
            type='number'
            id='time'
            min='5'
            max='240'
            placeholder='Minutes'
            className={styles.input}
          />
          <label htmlFor='dairy' className={styles.label}>
            <Image
              src='/dairy.svg'
              alt='Dairy icon'
              width={32}
              height={32}
              className={styles.icon}
            />
            Dairy Free
          </label>
          <input type='checkbox' className={styles.input} id='dairy' />
          <label htmlFor='gluten' className={styles.label}>
            <Image
              src='/gluten.svg'
              alt='Gluten icon'
              width={32}
              height={32}
              className={styles.icon}
            />
            Gluten Free
          </label>
          <input type='checkbox' className={styles.input} id='gluten' />
          <label htmlFor='vegan' className={styles.label}>
            <Image
              src='/vegan.svg'
              alt='Vegan icon'
              width={32}
              height={32}
              className={styles.icon}
            />
            Vegan
          </label>
          <input type='checkbox' className={styles.input} id='vegan' />
          <label htmlFor='vegetarian' className={styles.label}>
            <Image
              src='/vegetarian.svg'
              alt='Vegetarian icon'
              width={32}
              height={32}
              className={styles.icon}
            />
            Vegetarian
          </label>
          <input type='checkbox' className={styles.input} id='vegetarian' />
        </div>
      </form>
    </div>
  );
}
