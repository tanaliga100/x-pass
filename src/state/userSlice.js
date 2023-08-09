import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "jordan100",
  email: "jordan@mail.com",
  followers: 909,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      state.userName = action.payload;
      state.email = action.payload;
      state.followers = action.payload;
    },
  },
});

export const { currentUser } = userSlice.actions;
export default userSlice.reducer;
