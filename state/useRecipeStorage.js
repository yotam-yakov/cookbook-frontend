import { create } from 'zustand';

const useRecipeStorage = create((set) => ({
  recipe: {},
  searchResults: [],
  setRecipe: (recipe) => set(() => ({ recipe: { ...recipe } })),
  clearRecipe: () => set(() => ({ recipe: {} })),
  setSearchResults: (recipes) => set(() => ({ searchResults: recipes })),
}));

export default useRecipeStorage;
