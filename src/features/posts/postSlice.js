import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  posts: [],
  isLoading: false,
  error: "",
};

export const createPost = createAsyncThunk(
  "posts/addPost",
  async (postToAdd) => {
    try {
      const { data: posts } = await axios.post("api/posts", { postToAdd });
      return posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const { data: posts } = await axios.get("/api/posts");
    return posts;
  } catch (error) {
    console.log(error);
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload.posts;
      })
      .addCase(createPost.rejected, (state) => {
        state.isLoading = false;
        state.error = "can not create post.";
      })
      .addCase(getAllPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload.posts;
      })
      .addCase(getAllPosts.rejected, (state) => {
        state.isLoading = false;
        state.error = "can not get posts.";
      });
  },
});

export const postReducer = postSlice.reducer;
export const usePosts = () => useSelector((state) => state.posts);
