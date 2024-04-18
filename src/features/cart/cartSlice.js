import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = new item
      // find that product and then mutate the quantity on that product
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
        return;
      }

      state.cart.push(action.payload);
    },

    deleteitem(state, action) {
      // payload = product ID
      // find the product with that ID and then delete it
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    increeaseItemQuantity(state, action) {
      // find that product and then mutate the quantity on that product
      const product = state.cart.find(
        (product) => product.id === action.payload
      );

      product.quantity++;
      product.totalPrice = product.price * product.quantity;
    },
    decreaseItemQuantity(state, action) {
      // find that product and then mutate the quantity on that product
      const product = state.cart.find(
        (product) => product.id === action.payload
      );

      product.quantity--;
      product.totalPrice = product.price * product.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  increeaseItemQuantity,
  decreaseItemQuantity,
  deleteitem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCart = (state) => state.cart.cart;
