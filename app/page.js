import './globals.css';
import Recipes from '../components/Recipes/Recipes';
import Search from '../components/Search/Search';
import data from '../temp/recipes-temp';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <div>
      <Search />
      <Recipes recipes={data} />
    </div>
  );
}
