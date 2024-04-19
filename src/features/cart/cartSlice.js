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

    deleteItem(state, action) {
      // payload = product ID
      // find the product with that ID and then delete it
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      // find that product and then mutate the quantity on that product
      const productToIncrease = state.cart.find(
        (product) => product.id === action.payload
      );

      productToIncrease.quantity++;
      productToIncrease.totalPrice =
        productToIncrease.price * productToIncrease.quantity;
    },
    decreaseItemQuantity(state, action) {
      // find that product and then mutate the quantity on that product
      const productToDecrease = state.cart.find(
        (product) => product.id === action.payload
      );

      productToDecrease.quantity--;
      productToDecrease.totalPrice =
        productToDecrease.price * productToDecrease.quantity;

      // if item quantity is 0  remove it from cart
      if (productToDecrease.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

//get total cart quantity
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

// get the cart array of items
export const getCart = (state) => state.cart.cart;

// get the total price the cart
export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
