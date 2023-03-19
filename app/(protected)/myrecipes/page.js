import Recipes from '../../../components/Recipes/Recipes';
import { getSavedRecipes } from '../../../api/cookbook/api';
import { headers } from 'next/headers';
import { use } from 'react';

async function getRecipes() {
  const headersInst = headers();
  const jwt = headersInst.get('cookie').split('=')[1];
  const recipes = await getSavedRecipes(jwt);
  return recipes;
}

export default function MyRecipes() {
  const recipes = use(getRecipes());

  return <Recipes recipes={recipes} />;
}
