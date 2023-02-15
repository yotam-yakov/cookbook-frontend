import { create } from 'zustand';

const useRecipeStorage = create((set) => ({
  recipe: {},
  setRecipe: (recipe) => set(() => ({ recipe: { ...recipe } })),
}));

export default useRecipeStorage;
