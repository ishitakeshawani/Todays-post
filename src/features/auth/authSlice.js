import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoading: false,
  error: "",
};

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const {
        data: { createdUser, encodedToken },
      } = await axios.post("api/auth/signup", userData);
      axios.defaults.headers.common["authorization"] = encodedToken;
      return { createdUser, encodedToken };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const {
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", userData);
      axios.defaults.headers.common["authorization"] = encodedToken;

      return { foundUser, encodedToken };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.error = "";
        state.isLoading = false;
        state.user = action.payload.createdUser;
        localStorage.setItem("token", action.payload.encodedToken);
        localStorage.setItem("user", action.payload.createdUser);
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.error = "";
        state.isLoading = false;
        state.user = action.payload.foundUser;
        localStorage.setItem("token", action.payload.encodedToken);
        localStorage.setItem("user", JSON.stringify(action.payload.foundUser));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
export const useAuth = () => useSelector((state) => state.auth);
