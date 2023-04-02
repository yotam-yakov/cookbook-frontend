'use client';
import Recipes from '@/components/Recipes/Recipes';
import Search from '@/components/Search/Search';
import useRecipeStorage from '@/state/useRecipeStorage';
import { Fragment } from 'react';

export default function HomePage() {
  const searchResults = useRecipeStorage((state) => state.searchResults);

  return (
    <Fragment>
      <Search />
      {searchResults.length !== 0 && <Recipes recipes={searchResults} />}
    </Fragment>
  );
}
