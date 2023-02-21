'use client';
import '../../globals.css';
import Recipes from '../../../components/Recipes/Recipes';
import data from '../../../temp/recipes-temp';
import ProtectedRoute from '../../../utils/ProtectedRoute';

export default function SavedRecipes() {
  return (
    <ProtectedRoute>
      <Recipes recipes={data} />
    </ProtectedRoute>
  );
}
