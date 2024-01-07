import { configureStore } from "@reduxjs/toolkit";
import PasswordSlice from "./slices/PasswordSlice";

export const store = configureStore({
  reducer: {
    password: PasswordSlice,
  },
});
