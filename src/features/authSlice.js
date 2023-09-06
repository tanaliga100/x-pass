import { createSlice } from "@reduxjs/toolkit";

// const retrievedToken = localStorage.getItem("token");
// const retrievedUser = JSON.parse(localStorage.getItem("currentUser"));

const initialState = {
  isAuthenticated: localStorage.getItem("isAuth", false),
  message: "",
  currentUserDocId: localStorage.getItem("currUserId") || null,
  currentUser: {
    uid: localStorage.getItem("currentId") || " ",
    email: localStorage.getItem("currentEmail") || "",
    // extra props
    profilePic: null,
    label: "",
    address: "",
    gender: "",
    occupation: "",
    userName: "",
    displayName: "",
    photoURL: "",
    isAnonymous: false,
  },
  accessToken: localStorage.getItem("accessToken") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      const { email, uid, displayName, isAnonymous, photoURL, accessToken } =
        action.payload;
      // STORAGE PERSIST
      localStorage.setItem("isAuth", true);
      localStorage.setItem("currentEmail", state.currentUser.email);
      localStorage.setItem("currentId", state.currentUser.uid);
      localStorage.setItem("accessToken", accessToken);

      state.currentUser.email = email;
      state.currentUser.uid = uid;
      state.isAuthenticated = true;
      state.currentUser.displayName = displayName;
      state.currentUser.photoURL = photoURL;
      state.currentUser.isAnonymous = isAnonymous;
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
      localStorage.removeItem("accessToken");
      localStorage.removeItem("currUserId");
    },
    userDocId: (state, action) => {
      state.currentUserDocId = action.payload;
      localStorage.setItem("currUserId", action.payload);
    },
  },
});

export const { currentUser, logoutUser, userDocId, provideMessage } =
  authSlice.actions;
export default authSlice.reducer;

// const savedToken = localStorage.setItem(
//   ("token", JSON.stringify(initialState.token))
// );
// const retrievedToken = localStorage.getItem(JSON.parse("token"));
// const removedToken = localStorage.removeItem("token");
