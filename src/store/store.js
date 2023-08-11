import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import modalReducer from "../features/uiSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    user: userReducer,
  },
});
export default store;
