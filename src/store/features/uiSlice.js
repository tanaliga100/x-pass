import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddPost: false,
  isModalOpen: false,
  content: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    openAddPost: (state) => {
      state.isAddPost = true;
    },
    closeAddPost: (state) => {
      state.isAddPost = true;
    },
  },
});

export const { openModal, closeModal, openAddPost, closeAddPost } =
  modalSlice.actions;
export default modalSlice.reducer;
