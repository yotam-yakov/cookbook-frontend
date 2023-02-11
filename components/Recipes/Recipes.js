import Card from '../Card/Card';
import styles from './Recipes.module.css';

export default function Recipes({ recipes }) {
  return (
    <div className={styles.recipes}>
      {recipes.map((recipe, index) => {
        return <Card recipe={recipe} key={index} />;
      })}
    </div>
  );
}
