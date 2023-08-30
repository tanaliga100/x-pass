import { createSlice } from "@reduxjs/toolkit";

// const retrievedToken = localStorage.getItem("token");
// const retrievedUser = JSON.parse(localStorage.getItem("currentUser"));

const initialState = {
  isAuthenticated: localStorage.getItem("isAuth", false),
  message: "",
  currentUser: {
    email: localStorage.getItem("currentEmail") || "",
    uid: localStorage.getItem("currentId") || " ",
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
      localStorage.setItem("currentEmail", state.currentUser.email);
      localStorage.setItem("currentId", state.currentUser.uid);
      localStorage.setItem("isAuth", true);
    },
    provideMessage: (state, action) => {
      state.message = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.message = "";
      localStorage.removeItem("currentEmail");
      localStorage.removeItem("currentId");
      localStorage.removeItem("isAuth");
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
