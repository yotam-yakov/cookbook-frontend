import Recipes from '../../../components/Recipes/Recipes';
import data from '../../../temp/recipes-temp';

export default async function MyRecipes() {
  return <Recipes recipes={data} />;
}
