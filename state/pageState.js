import { create } from 'zustand';

const usePageStorage = create((set) => ({
  recipe: {},
  setRecipe: (recipe) => set(() => ({ recipe: { ...recipe } })),
}));

export default usePageStorage;
