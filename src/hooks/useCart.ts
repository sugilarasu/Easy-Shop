'use client';

import type { CartItem, Product } from '@/types';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getLocalStorageItem, setLocalStorageItem } from '@/lib/localStorage'; // Ensure these are compatible or adapt

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getTotalPrice: () => number;
}

// Custom storage object for zustand/persist
const customStorage = {
  getItem: (name: string) => {
    const item = getLocalStorageItem(name, null);
    // Zustand persist middleware expects a string or null
    return item ? JSON.stringify(item) : null;
  },
  setItem: (name: string, value: string) => {
     // Zustand persist middleware provides a stringified value
    setLocalStorageItem(name, JSON.parse(value));
  },
  removeItem: (name: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(name);
    }
  },
};


export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
                  : item
              ),
            };
          }
          return {
            items: [...state.items, { ...product, quantity: Math.min(quantity, product.stock) }],
          };
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },
      updateItemQuantity: (productId, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity: Math.max(0, Math.min(quantity, item.stock)) } : item
          ).filter(item => item.quantity > 0), // Remove if quantity is 0
        }));
      },
      clearCart: () => {
        set({ items: [] });
      },
      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
      getTotalPrice: () => {
        return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'e-clone-cart-storage',
      storage: createJSONStorage(() => customStorage),
    }
  )
);
