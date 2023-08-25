import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../models/model";

interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (
      state: CartState,
      action: PayloadAction<{ productItem: CartItem; orderCount: number }>
    ) => {
      const { productItem, orderCount } = action.payload;
      const newItem: CartItem = productItem;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (orderCount === 1) {
        state.totalQuantity++;
        if (!existingItem) {
          state.cartItems.push({
            id: newItem.id,
            title: newItem.title,
            price: newItem.price,
            image: newItem.image,
            totalPrice: newItem.price,
            quantity: 1,
          });
        } else {
          existingItem.quantity++;
          existingItem.totalPrice =
            Number(existingItem.totalPrice) + Number(newItem.price);
        }
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        );
      } else if (orderCount > 1) {
        const prevTotalQuantity = state.totalQuantity;
        state.totalQuantity = prevTotalQuantity + orderCount;
        if (!existingItem) {
          state.cartItems.push({
            id: newItem.id,
            title: newItem.title,
            price: newItem.price,
            image: newItem.image,
            totalPrice: newItem.price * orderCount,
            quantity: orderCount,
          });
        } else {
          const prevExistingItemQuantity = existingItem.quantity;
          existingItem.quantity = prevExistingItemQuantity + orderCount;
          existingItem.totalPrice =
            Number(existingItem.totalPrice) +
            Number(newItem.price) * orderCount;
        }
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        );
      }
    },

    clearCart: (state: CartState) => {
      (state.cartItems = []),
        (state.totalAmount = 0),
        (state.totalQuantity = 0);
    },

    removeItem: (
      state: CartState,
      action: PayloadAction<{ id : number }>
    ) => {
      const itemIdToRemove: number = action.payload.id;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === itemIdToRemove
      );

      if (state.cartItems.length === 1 && existingItemIndex !== -1) {
        state.totalAmount = 0;
        state.totalQuantity = 0;
        state.cartItems = [];
      } else {
        state.cartItems.splice(existingItemIndex, 1);
        state.totalQuantity = state.cartItems.reduce(
          (total, item) => total + Number(item.quantity),
          0
        );
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        );
      }
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
