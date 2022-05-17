import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  userData: null,
  isLoading: false,
  error: "",
};

export const getUserById = createAsyncThunk(
  "profile/getUserById",
  async (userId) => {
    try {
      const {
        data: { user },
      } = await axios.get(`/api/users/${userId}`);
      console.log(user);
      return user;
    } catch (error) {
      console.log(error);
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
      });
  },
});

export const profileReducer = profileSlice.reducer;
export const useProfile = () => useSelector((state) => state.profile);
