import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice"; // Correct import for the CartSlice reducer

const Store = configureStore({
  reducer: {
    cart: CartSlice, 
  },
});

export default Store;
