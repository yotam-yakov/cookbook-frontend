import './globals.css';
import Recipes from '../components/Recipes/Recipes';
import Search from '../components/Search/Search';
import data from '../temp/recipes-temp';
import styles from './Home.module.css';
import Recipe from '../components/Recipe/Recipe';

export default function HomePage() {
  return (
    <div>
      <Search />
      <Recipes recipes={data} />
      <Recipe {...data[0]} />
    </div>
  );
}
