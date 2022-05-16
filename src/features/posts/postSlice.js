import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  posts: [],
  isLoading: false,
  error: "",
  isPostInEditMode: false,
};

export const createPost = createAsyncThunk("posts/Post", async (postData) => {
  try {
    const { data: posts } = await axios.post("/api/posts", { postData });
    return posts;
  } catch (error) {
    console.log(error.response);
  }
});

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    const { data: posts } = await axios.get("/api/posts");
    return posts;
  } catch (error) {
    console.log(error);
  }
});

export const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ postId, comment }) => {
    try {
      const { data: posts } = await axios.post(`/api/posts/comment/${postId}`, {
        comment,
      });
      return posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addLikeToPost = createAsyncThunk(
  "posts/addLikeToPost",
  async (postId) => {
    try {
      const {
        data: { posts },
      } = await axios.post(`/api/posts/like/${postId}`);
      return posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeLikedPost = createAsyncThunk(
  "posts/removeLikedPost",
  async (postId) => {
    try {
      const {
        data: { posts },
      } = await axios.post(`/api/posts/dislike/${postId}`);
      return posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postData, postId }) => {
    try {
      const {
        data: { posts },
      } = await axios.post(`/api/posts/edit/${postId}`, { postData });
      return posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    try {
      const {
        data: { posts },
      } = await axios.delete(`/api/posts/${postId}`);
      return posts;
    } catch (error) {
      console.log(error);
    }
  }
);



const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setEditPostMode: (state, action) => {
      state.isPostInEditMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload.posts.reverse();
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
        state.posts = action.payload.posts.reverse();
      })
      .addCase(getAllPosts.rejected, (state) => {
        state.isLoading = false;
        state.error = "can not get posts.";
      })
      .addCase(addLikeToPost.fulfilled, (state, action) => {
        state.posts = action.payload.reverse();
      })
      .addCase(addLikeToPost.rejected, (state) => {
        state.error = "can not like post.";
      })
      .addCase(removeLikedPost.fulfilled, (state, action) => {
        state.posts = action.payload.reverse();
      })
      .addCase(removeLikedPost.rejected, (state) => {
        state.error = "can not dislike post.";
      })
      .addCase(editPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isPostInEditMode = false;
        state.posts = action.payload.reverse();
      })
      .addCase(editPost.rejected, (state) => {
        state.isLoading = false;
        state.isPostInEditMode = false;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = action.payload.reverse();
      })
      .addCase(deletePost.rejected, (state) => {
        state.error = "can not delete post";
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.posts = action.payload.posts.reverse();
      });
  },
});

export const postReducer = postSlice.reducer;
export const usePosts = () => useSelector((state) => state.posts);
export const { setEditPostMode } = postSlice.actions;
