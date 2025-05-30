
'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getLocalStorageItem, setLocalStorageItem } from '@/lib/localStorage';

interface User {
  name: string;
  age: string;
  email: string;
  phone: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  loginUser: (userData: User) => void;
  logoutUser: () => void;
}

const customStorage = {
  getItem: (name: string) => {
    const item = getLocalStorageItem(name, null);
    return item ? JSON.stringify(item) : null;
  },
  setItem: (name: string, value: string) => {
    setLocalStorageItem(name, JSON.parse(value));
  },
  removeItem: (name: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(name);
    }
  },
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      loginUser: (userData) => set({ isLoggedIn: true, user: userData }),
      logoutUser: () => set({ isLoggedIn: false, user: null }),
    }),
    {
      name: 'easyshope-auth-storage', // Changed from charmshop-auth-storage
      storage: createJSONStorage(() => customStorage),
    }
  )
);
