import Card from '../Card/Card';
import Image from 'next/image';
import styles from './Recipes.module.css';

export default function Recipes({ recipes, saved }) {
  return (
    <div className={styles.recipes}>
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => {
          return <Card recipe={recipe} saved={saved} key={index} />;
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
