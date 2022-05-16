import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  userData: null,
  isLoading: false,
  isInEditMode: false,
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

export const editUserData = createAsyncThunk(
  "profile/editUserData",
  async ({ userData }) => {
    try {
      const {
        data: { user },
      } = await axios.post("/api/users/edit", { userData });

      console.log(userData,user)
      return user;
    } catch (error) {
      console.log(error.response);
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
      });
  },
});

export const profileReducer = profileSlice.reducer;
export const useProfile = () => useSelector((state) => state.profile);
