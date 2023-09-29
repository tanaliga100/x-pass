import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";

// ASYNC THUNK
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const userCollection = collection(db, "users");
    const querySnap = await getDocs(userCollection);

    const users = [];
    querySnap.forEach((doc) => {
      users.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const initialState = {
  users: [],
  loading: false,
  error: null,
  user: {},
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    listOfUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export const { listOfUsers } = userSlice.actions;
export default userSlice.reducer;
