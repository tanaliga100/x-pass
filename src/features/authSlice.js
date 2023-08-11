import { createSlice } from "@reduxjs/toolkit";

// const retrievedToken = localStorage.getItem("token");
// const retrievedUser = JSON.parse(localStorage.getItem("currentUser"));

const initialState = {
  isAuthenticated: true,
  message: "",
  currentUser: {
    email: "jordantanaliga100",
    uid: "adadasd12dadasd",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      const { email, uid } = action.payload;
      state.currentUser.email = email;
      state.currentUser.uid = uid;
      state.isAuthenticated = true;
    },
    provideMessage: (state, action) => {
      state.message = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.message = "";
    },
  },
});

export const { currentUser, logoutUser, provideMessage } = authSlice.actions;
export default authSlice.reducer;

// const savedToken = localStorage.setItem(
//   ("token", JSON.stringify(initialState.token))
// );
// const retrievedToken = localStorage.getItem(JSON.parse("token"));
// const removedToken = localStorage.removeItem("token");
