import { create } from 'zustand';

const useRecipeStorage = create((set) => ({
  recipe: {},
  searchResults: [],
  savedRecipes: [],
  myRecipes: [],
  setRecipe: (recipe) => set(() => ({ recipe: { ...recipe } })),
  clearRecipe: () => set(() => ({ recipe: {} })),
  setSearchResults: (recipes) => set(() => ({ searchResults: recipes })),
  setSavedRecipes: (recipes) => set(() => ({ savedRecipes: recipes })),
  addToSaved: (recipe) => set((state) => ({ ...state.savedRecipes, recipe })),
  setMyRecipes: (recipes) => set(() => ({ myRecipes: recipes })),
  addToMy: (recipe) => set((state) => ({ ...state.myRecipes, recipe })),
}));

export default useRecipeStorage;
