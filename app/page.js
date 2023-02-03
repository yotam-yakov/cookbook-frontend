'use client';
import './globals.css';
import Recipes from '../components/Recipes/Recipes';
import Search from '../components/Search/Search';
import data from '../temp/recipes-temp';
import Recipe from '../components/Recipe/Recipe';
import { useState } from 'react';

export default function HomePage() {
  const [recipe, setRecipe] = useState('a');

  const closeRecipe = () => {
    setRecipe(undefined);
  };

  return (
    <div>
      <Search />
      <Recipes recipes={data} />
      {recipe && <Recipe {...data[0]} onClose={closeRecipe} />}
    </div>
  );
}
