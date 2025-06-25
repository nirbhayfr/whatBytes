const { configureStore } = require("@reduxjs/toolkit");
import filterReducer from "./filterSlice";
import productReducer from "./productSlice";

const store = configureStore({
     reducer: {
          filter: filterReducer,
          product: productReducer,
     },
});

export default store;
