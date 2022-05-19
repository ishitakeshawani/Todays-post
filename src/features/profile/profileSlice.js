import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const initialState = {
  userData: null,
  isLoading: false,
  isInEditMode: false,
  userFollowing: [],
  userFollowers: [],
  error: "",
};

export const getUserById = createAsyncThunk(
  "profile/getUserById",
  async (userId) => {
    try {
      const {
        data: { user },
      } = await axios.get(`/api/users/${userId}`);
      return user;
    } catch (error) {
      if (error.response.status === 404) {
        toast("Please do signup!");
      } else if (error.response.status === 500) {
        toast("Please do signup to get profile details!");
      } else {
        toast(error.message);
      }
    }
  }
);

export const editUserData = createAsyncThunk(
  "profile/editUserData",
  async ({ userData }) => {
    try {
      const {
        data: { user },
      } = await axios.post("/api/users/edit", { userData });
      return user;
    } catch (error) {
      if (error.response.status === 404) {
        toast("Please do signup to edit profile!");
      } else {
        toast(error.message);
      }
    }
  }
);

export const followUser = createAsyncThunk(
  "profile/followUser",
  async (followUserId) => {
    try {
      const {
        data: {
          followUser,
          user: { followers, following },
        },
      } = await axios.post(`/api/users/follow/${followUserId}`);
      return { followUser, followers, following };
    } catch (error) {
      if (error.response.status === 404) {
        toast("Please do signup to follow user!");
      } else {
        toast(error.message);
      }
    }
  }
);

export const unFollowUser = createAsyncThunk(
  "profile/unFollowUser",
  async (followUserId) => {
    try {
      const {
        data: {
          followUser,
          user: { followers, following },
        },
      } = await axios.post(`/api/users/unfollow/${followUserId}`);
      return { followUser, followers, following };
    } catch (error) {
      if (error.response.status === 404) {
        toast("Please do signup to unfollow user!");
      } else {
        toast(error.message);
      }
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(getUserById.rejected, (state) => {
        state.error = "can not getUser";
      })
      .addCase(editUserData.pending, (state) => {
        state.isInEditMode = true;
      })
      .addCase(editUserData.fulfilled, (state, action) => {
        state.isInEditMode = false;
        state.userData = action.payload;
      })
      .addCase(editUserData.rejected, (state) => {
        state.error = "can not edit data";
      })
      .addCase(followUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userFollowers = action.payload.followers;
        state.userFollowing = action.payload.following;
        state.userData = action.payload.followUser;
      })
      .addCase(unFollowUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(unFollowUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userFollowers = action.payload.followers;
        state.userFollowing = action.payload.following;
        state.userData = action.payload.followUser;
      });
  },
});

export const profileReducer = profileSlice.reducer;
export const useProfile = () => useSelector((state) => state.profile);
