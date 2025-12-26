// store/cartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (item: { id: number }) => void; // Accept just id
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: ({ id }) => {
        const existing = get().cart.find((i) => i.id === id);
        if (existing) {
          set({
            cart: get().cart.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({
            cart: [...get().cart, { id, quantity: 1 }],
          });
        }
      },
      removeFromCart: (id) =>
        set({ cart: get().cart.filter((i) => i.id !== id) }),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);
