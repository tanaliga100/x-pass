import { createSlice } from "@reduxjs/toolkit";

// const retrievedToken = localStorage.getItem("token");
// const retrievedUser = JSON.parse(localStorage.getItem("currentUser"));

// const initialState = {
//   // isAuthenticated: localStorage.getItem("isAuth", false),
//   isAuthenticated: true,
//   message: "",
//   currentUserDocId: localStorage.getItem("currUserId") || null,
//   currentUser: {
//     uid: localStorage.getItem("currentId") || " ",
//     email: localStorage.getItem("currentEmail") || "",
//     // extra props
//     profilePic: null,
//     label: "",
//     address: "",
//     gender: "",
//     occupation: "",
//     userName: "",
//     displayName: "",
//     photoURL: "",
//     isAnonymous: false,
//   },
//   accessToken: localStorage.getItem("accessToken") || null,
// };

const initialState = {
  isAuthenticated: localStorage.getItem("isAuth") || false,
  //   isAuthenticated: true,
  user: {
    // displayName: localStorage.getItem("displayName") || "anonymous",
    // email: localStorage.getItem("email") || "",
    // userId: localStorage.getItem("userID") || "",
    // emailVerified: localStorage.getItem("verified") || false,
    // // lastSignInTime: localStorage.getItem("lastSignInTime") || "",
    // phoneNumber: localStorage.getItem("phone") || "09690243354",
    // photoURL: localStorage.getItem("photo") || "",
  },
  isLoading: true,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
      localStorage.setItem("isAuth", action.payload);
    },
    //     currentUser: () => {
    //  console.log("CURRENT USER PAYLOAD", action.payload);
    //  const { email, uid, displayName, isAnonymous, photoURL, accessToken } =
    //    action.payload;
    //  // STORAGE PERSIST
    //  localStorage.setItem("isAuth", true);
    //  localStorage.setItem("currentEmail", state.currentUser.email);
    //  localStorage.setItem("currentId", state.currentUser.uid);
    //  localStorage.setItem("accessToken", accessToken);
    //  state.currentUser.email = email;
    //  state.currentUser.uid = uid;
    //  state.isAuthenticated = true;
    //  state.currentUser.displayName = displayName;
    //  state.currentUser.photoURL = photoURL;
    //  state.currentUser.isAnonymous = isAnonymous;
    //     },
    setCurrentUser: (state, action) => {
      // PAYLOAD
      const {
        displayName,
        email,
        emailVerified,
        lastSignInTime,
        phoneNumber,
        photoURL,
        creationTime,
      } = action.payload;

      state.user.displayName = displayName;
      state.user.creationTime = creationTime;
      state.user.lastSignInTime = lastSignInTime;
      state.user.email = email;
      state.user.emailVerified = emailVerified;
      state.user.photoURL = photoURL;
      state.user.phoneNumber = phoneNumber;
      // JSON.stringify(localStorage.setItem("displayName", displayName));

      //  state.user.userId = action.payload.userId;
      //  state.user.email = action.payload.email;
      //  // STATES
      //  state.isLoading = false;
      //  state.message = action.payload.message;
    },
    removeUser: (state) => {
      state.isAuthenticated = false;
      state.user.email = null;
      state.user.userId = null;
      state.isLoading = false;
      localStorage.removeItem("isAuth");
      //  localStorage.removeItem("currentEmail");
      //  localStorage.removeItem("currentId");
      //  localStorage.removeItem("accessToken");
      //  localStorage.removeItem("currUserId");
    },
    provideMessage: (state, action) => {
      console.log("PROVIDE MESSAGE", action.payload);
      //  state.message = action.payload;
    },
  },
});
export const {
  setCurrentUser,
  removeUser,
  setIsAuthenticated,
  provideMessage,
} = authSlice.actions;
export default authSlice.reducer;

// SELECTORS
