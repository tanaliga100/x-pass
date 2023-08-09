import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
export default store;
