import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  loggedIn: boolean;
}

const initialState: CartState = {
  loggedIn: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    toggleLoggedIn: (state:CartState) => {
      state.loggedIn = !state.loggedIn;
    },
  },
});

export const { toggleLoggedIn } = authenticationSlice.actions;
export default authenticationSlice.reducer;
