import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
  deleteFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((cart) => cart.id !== id),
    })),
}));

export default useCartStore;
