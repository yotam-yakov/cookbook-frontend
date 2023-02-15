import { create } from 'zustand';

const useUserStorage = create((set) => ({
  user: {},
  logIn: (user) => set(() => ({ user: { ...user } })),
  logOut: () => set(() => ({ user: {} })),
}));

export default useUserStorage;
