import Recipes from '@/components/Recipes/Recipes';
import { getMyRecipes } from '@/api/cookbook';
import { cookies } from 'next/headers';
import { use } from 'react';

export const metadata = {
  title: 'My Recipes',
};

async function getRecipes() {
  const cookieStore = cookies();
  const jwt = cookieStore.get('jwt').value;
  const recipes = await getMyRecipes(jwt);
  return recipes;
}

export default function MyRecipes() {
  const recipes = use(getRecipes());

  return <Recipes recipes={recipes} />;
}
