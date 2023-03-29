import Recipes from '../../../components/Recipes/Recipes';
import { getSavedRecipes } from '../../../api/cookbook/api';
import { cookies } from 'next/headers';
import { use } from 'react';

export const metadata = {
  title: 'Saved Recipes',
};

async function getRecipes() {
  console.log('data fetching');
  const cookieStore = cookies();
  const jwt = cookieStore.get('jwt').value;
  const recipes = await getSavedRecipes(jwt);
  return recipes;
}

export default function SavedRecipes() {
  const recipes = use(getRecipes());
  console.log(recipes);

  return <Recipes recipes={recipes} saved />;
}
