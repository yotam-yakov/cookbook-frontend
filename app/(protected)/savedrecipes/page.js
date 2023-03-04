import Recipes from '../../../components/Recipes/Recipes';
import data from '../../../temp/recipes-temp';

export default function SavedRecipes() {
  return <Recipes recipes={data} />;
}
