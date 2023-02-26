'use client';
import Recipes from '../components/Recipes/Recipes';
import Search from '../components/Search/Search';
import Recipe from '../components/Recipe/Recipe';
import useRecipeStorage from '../state/useRecipeStorage';
import { Fragment } from 'react';

export default function HomePage() {
  const recipe = useRecipeStorage((state) => state.recipe);
  const searchResults = useRecipeStorage((state) => state.recipes);

  return (
    <Fragment>
      <Search />
      {searchResults.length !== 0 && <Recipes recipes={searchResults} />}
      {Object.keys(recipe).length !== 0 && <Recipe {...recipe} />}
    </Fragment>
  );
}
