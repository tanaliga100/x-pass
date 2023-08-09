import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./uiSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
  },
});
export default store;
