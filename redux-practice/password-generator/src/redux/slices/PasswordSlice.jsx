import { createSlice } from "@reduxjs/toolkit";

export const PasswordSlice = createSlice({
  name: "password",
  initialState: {
    value: "hello",
  },
  reducers: {
    setPassword: (state, action) => {
      state.value = action.payload;
    },
    // generatePassword:(state)=>{

    // }
  },
});

export const { setPassword } = PasswordSlice.actions;
export default PasswordSlice.reducer;
