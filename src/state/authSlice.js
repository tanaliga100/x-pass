import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  message: "",
  token: null,
  currentUser: {
    email: "",
    uid: "",
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      //  const { accessToken, email, uid } = action.payload.user;
      state.currentUser.uid = action.payload.uid;
      state.currentUser.email = action.payload.email;
      state.token = action.payload.accessToken;
      state.isAuthenticated = true;
    },

    provideMessage: (state, action) => {
      state.message = action.payload;
    },
    logoutUser: (state) => {
      state.currentUser.email = "";
      state.isAuthenticated = false;
      state.token = "";
    },
    demoAccount: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { currentUser, logoutUser, demoAccount, provideMessage } =
  authSlice.actions;
export default authSlice.reducer;
