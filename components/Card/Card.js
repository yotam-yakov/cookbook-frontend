import Image from 'next/image';
import styles from './Card.module.css';

export default function Card() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Title Title Title Title Title Title Title Title Title Title Title Title{' '}
      </h2>
      <Image
        src='/cookbook.png'
        alt='Recipe image'
        width={160}
        height={160}
        className={styles.image}
      />
      <p className={styles.time}>
        <Image src='/clock.svg' alt='Time icon' width={24} height={24} />
        55 Min
      </p>
      <p className={styles.source}>Somewhere</p>
      <div className={styles.diets}>
        <Image
          src='/dairy.svg'
          alt='Dairy icon'
          width={32}
          height={32}
          className={styles.diet}
        />
        <Image
          src='/gluten.svg'
          alt='Gluten icon'
          width={32}
          height={32}
          className={styles.diet}
        />
        <Image
          src='/vegan.svg'
          alt='Vegan icon'
          width={32}
          height={32}
          className={styles.diet}
        />
        <Image
          src='/vegetarian.svg'
          alt='Vegetarian icon'
          width={32}
          height={32}
          className={styles.diet}
        />
      </div>
    </div>
  );
}
