import { create } from 'zustand';

const useRecipeStorage = create((set) => ({
  recipe: {},
  recipes: [],
  setRecipe: (recipe) => set(() => ({ recipe: { ...recipe } })),
  setRecipes: (recipes) => set(() => ({ recipes: recipes })),
  clearRecipe: () => set(() => ({ recipe: {} })),
}));

export default useRecipeStorage;
