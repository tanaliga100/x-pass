import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddPost: false,
  isModalOpen: false,
  isProfileModalOpen: false,
  content: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openAuthModal: (state) => {
      state.isModalOpen = true;
    },
    closeAuthModal: (state) => {
      state.isModalOpen = false;
    },
    openAddPost: (state) => {
      state.isAddPost = true;
    },
    closeAddPost: (state) => {
      state.isAddPost = false;
    },
    openProfileModal: (state) => {
      state.isProfileModalOpen = true;
    },
    closeProfileModal: (state) => {
      state.isProfileModalOpen = false;
    },
  },
});

export const {
  openAuthModal,
  closeAuthModal,
  openAddPost,
  closeAddPost,
  openProfileModal,
  closeProfileModal,
} = modalSlice.actions;
export default modalSlice.reducer;
