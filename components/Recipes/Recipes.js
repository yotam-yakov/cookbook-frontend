import Image from 'next/image';
import Card from '../Card/Card';
import styles from './Recipes.module.css';

export default function Recipes({ recipes }) {
  return (
    <div className={styles.recipes}>
      {recipes.length > 0 && recipes[0] !== 'empty' ? (
        recipes.map((recipe, index) => {
          return <Card recipe={recipe} key={index} />;
        })
      ) : (
        <div className={styles.notFound}>
          <Image
            src='/broken-egg.svg'
            alt='no recipes found'
            width={128}
            height={128}
          />
          <p className={styles.text}>We could not find any recipes to show!</p>
        </div>
      )}
    </div>
  );
}
