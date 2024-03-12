import { configureStore } from "@reduxjs/toolkit";
import { shoeReducer } from "../features/shoe/shoeSlice";

export const store = configureStore({
    reducer: {shoeReducer}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;