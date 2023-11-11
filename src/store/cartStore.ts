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

  editCartItem: (id, qty) =>
    set((state) => {
      const cartItemToUpdate = state.cart.find((elem) => elem.id === id);

      cartItemToUpdate.title = "Updated";
      cartItemToUpdate.quantity = qty;
      cartItemToUpdate.price = cartItemToUpdate.price;

      return {
        cart: state.cart,
      };
    }),
}));

export default useCartStore;
