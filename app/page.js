import './globals.css';
import Card from '../components/Card/Card';
import recipes from '../temp/recipes-temp';
import styles from './Home.module.css';
import Search from '../components/Search/Search';

export default function HomePage() {
  return (
    <div>
      <Search />
      <div className={styles.results}>
        {recipes.map((recipe, index) => {
          return <Card {...recipe} key={index} />;
        })}
      </div>
    </div>
  );
}
