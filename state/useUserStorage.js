import { create } from 'zustand';

const useUserStorage = create((set) => ({
  user: {},
  isLoggedIn: false,
  logIn: () => set(() => ({ isLoggedIn: true })),
  logOut: () => set(() => ({ user: {}, isLoggedIn: false })),
}));

export default useUserStorage;
