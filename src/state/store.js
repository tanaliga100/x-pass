import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import modalReducer from "./uiSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    user: userReducer,
  },
});
export default store;
