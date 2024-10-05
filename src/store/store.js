import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./features/productSlice";

export const productStore = configureStore({
  reducer: {
    [productsSlice.reducerPath]: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsSlice.middleware),
});
