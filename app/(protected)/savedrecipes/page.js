'use client';
import { useEffect } from 'react';
import { getSavedRecipes } from '../../../api/cookbook/api';
import Recipes from '../../../components/Recipes/Recipes';
import data from '../../../temp/recipes-temp';
import ProtectedRoute from '../../../utils/ProtectedRoute';

export default function SavedRecipes() {
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    getSavedRecipes(jwt);
  }, []);

  return (
    <ProtectedRoute>
      <Recipes recipes={data} />
    </ProtectedRoute>
  );
}
