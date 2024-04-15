import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //cart: [],
  cart: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      quantity: 2,
      totalPrice: 219.9,
    },

    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      quantity: 3,
      totalPrice: 66.9,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = new item
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
