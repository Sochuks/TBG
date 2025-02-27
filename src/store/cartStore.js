import {create} from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
    persist(
      (set) => ({
        cart: [],              // Array to hold cart items
        isSidebarOpen: false,  // Sidebar visibility state
        addToCart: (product) => set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id);
          if (existingItem) {
            // Increment quantity if item exists
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          // Add new item with quantity 1 if it doesn’t exist
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),
        removeFromCart: (productId) =>
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
          })),
        toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
        clearCart: () => set({ cart: [] }),
      }),
      {
        name: 'cart-storage',       // Key for local storage
        getStorage: () => localStorage, // Persist cart in local storage
      }
    )
  );