const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
     category: "all",
     price: [0, 1000],
};

const filterSlice = createSlice({
     name: "filter",
     initialState: initialState,
     reducers: {
          changeCategory: (state, action) => {
               state.category = action.payload;
          },

          changePrice: (state, action) => {
               state.price = action.payload;
          },
     },
});

export const { changeCategory, changePrice } = filterSlice.actions;

export default filterSlice.reducer;
