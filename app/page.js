'use client';
import './globals.css';
import Recipes from '../components/Recipes/Recipes';
import Search from '../components/Search/Search';
import data from '../temp/recipes-temp';
import Recipe from '../components/Recipe/Recipe';
import useRecipeStorage from '../state/useRecipeStorage';

export default function HomePage() {
  const recipe = useRecipeStorage((state) => state.recipe);

  if (Object.keys(recipe).length === 0) {
    console.log(Object.keys(recipe));
  }

  return (
    <div>
      <Search />
      <Recipes recipes={data} />
      {Object.keys(recipe).length !== 0 && <Recipe {...recipe} />}
    </div>
  );
}
