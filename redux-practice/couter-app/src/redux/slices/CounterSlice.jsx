import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value++;
    },
    decrement: (state, action) => {
      state.value--;
    },
    reset: (state, action) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = CounterSlice.actions;
export default CounterSlice.reducer;
