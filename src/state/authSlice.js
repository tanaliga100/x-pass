import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  currentUser: {
    userName: "jordan100",
    email: "jordan100@mail.com",
    followers: 909,
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      state.userName = action.payload;
      state.email = action.payload;
      state.followers = action.payload;
    },
    logoutUser: (state) => {
      //  state.currentUser.userName = "";
      //  state.currentUser.email = "";
      //  state.currentUser.followers = "";
      state.isAuthenticated = false;
    },
    demoAccount: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { currentUser, logoutUser, demoAccount } = authSlice.actions;
export default authSlice.reducer;
