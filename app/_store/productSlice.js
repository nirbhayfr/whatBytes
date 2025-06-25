"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     products: null,
     cart: [],
};

const productSlice = createSlice({
     name: "products",
     initialState: initialState,
     reducers: {
          setProducts(state, action) {
               state.products = action.payload;
          },
          updateCart(state, action) {
               state.cart = JSON.parse(localStorage.getItem("cart"));
               if (state.cart === null) state.cart = [];

               const item = state.cart.find(
                    (item) => item.name === action.payload.name
               );

               if (item !== undefined) {
                    item.quantity = item.quantity + action.payload.quantity;
               } else {
                    state.cart.push(action.payload);
               }
               localStorage.setItem("cart", JSON.stringify(state.cart));
          },
     },
});

export const { setProducts, updateCart } = productSlice.actions;

export default productSlice.reducer;
