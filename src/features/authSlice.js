import { createSlice } from "@reduxjs/toolkit";

// const retrievedToken = localStorage.getItem("token");
// const retrievedUser = JSON.parse(localStorage.getItem("currentUser"));

const initialState = {
  isAuthenticated: localStorage.getItem("isAuth", false),
  message: "",
  currentUser: {
    uid: localStorage.getItem("currentId") || " ",
    email: localStorage.getItem("currentEmail") || "",
    // extra props
    profilePic: null,
    address: "sample Adress",
    gender: "Male",
    occupation: "Dev",
    fullName: "John Doe",
    userName: "@sample.com",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      console.log("THIS IS CURRENT USER", action.payload);
      const { email, uid } = action.payload;
      state.currentUser.email = email;
      state.currentUser.uid = uid;
      state.isAuthenticated = true;
      localStorage.setItem("currentEmail", state.currentUser.email);
      localStorage.setItem("currentId", state.currentUser.uid);
      localStorage.setItem("isAuth", true);
    },
    provideMessage: (state, action) => {
      console.log("message", action.payload);
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
