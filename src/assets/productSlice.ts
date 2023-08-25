import {  createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "../models/model";

interface ProductState {
  inputText: string;
  allProducts: ProductItem[];
  filteredProducts: ProductItem[];
  category: string;
  price: number;
}

const initialState: ProductState = {
  inputText: "",
  allProducts: [],
  filteredProducts: [],
  category: "ALL",
  price: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    initializeProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    onInputChange: (state, action) => {
      state.inputText = action.payload;
    },
    onCategoryChange: (state, action) => {
      state.category = action.payload;
    },
    onPriceChange: (state, action) => {
      state.price = action.payload;
    },
    onFilter: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const {
  initializeProducts,
  onInputChange,
  onCategoryChange,
  onPriceChange,
  onFilter,
} = productSlice.actions;
export default productSlice.reducer;
