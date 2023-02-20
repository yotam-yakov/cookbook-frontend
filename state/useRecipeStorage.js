import { create } from 'zustand';

const useRecipeStorage = create((set) => ({
  recipe: {},
  setRecipe: (recipe) => set(() => ({ recipe: { ...recipe } })),
  clearRecipe: () => set(() => ({ recipe: {} })),
}));

export default useRecipeStorage;
