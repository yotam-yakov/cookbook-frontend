import Recipes from '../../../components/Recipes/Recipes';
import { getSavedRecipes } from '../../../api/cookbook/api';
import { headers } from 'next/headers';
import cookies from 'js-cookie';
import data from '../../../temp/recipes-temp';
import { use } from 'react';

async function getRecipes() {
  const headersInst = headers();
  const jwt = headersInst.get('cookie').split('=')[1];
  const recipes = await getSavedRecipes(jwt);
  return recipes;
}

export default function SavedRecipes() {
  const recipes = use(getRecipes());
  console.log(recipes);

  return <Recipes recipes={recipes} />;
}
