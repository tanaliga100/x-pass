import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  try {
    const postCollection = collection(db, "posts");
    const querySnap = await getDocs(postCollection);

    console.log("querysnap", querySnap);

    const posts = [];
    querySnap.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return posts;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    listofPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "success";
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || action.payload;
    });
  },
});
export default postSlice.reducer;
