import Image from 'next/image';
import styles from './Search.module.css';

export default function Search() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type='text'
          id='search'
          name='search'
          placeholder='I am hungry...'
          className={styles.query}
        />
        <button type='button' className={styles.button}>
          <Image src='/filter.svg' alt='Filter icon' width={28} height={28} />
        </button>
        <button type='submit' className={styles.button}>
          <Image src='/search.svg' alt='Search icon' width={44} height={44} />
        </button>
        <div className={styles.filter}>
          <label for='' className={styles.label}>
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
          <label className={styles.label}>
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
          <label className={styles.label}>
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
          <label className={styles.label}>
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
          <label className={styles.label}>
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
