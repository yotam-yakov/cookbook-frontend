import { create } from 'zustand';

const useUserStorage = create((set) => ({
  user: {},
  isLoggedIn: false,
  logIn: (user) => set(() => ({ user: { ...user }, isLoggedIn: true })),
  logOut: () => set(() => ({ user: {}, isLoggedIn: false })),
}));

export default useUserStorage;
