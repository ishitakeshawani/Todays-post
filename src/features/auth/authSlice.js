import axios from "axios";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isLoggedIn: user ? true : false,
  users: [],
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
      toast("Sucessfully made an account!");
      return { createdUser, encodedToken };
    } catch (error) {
      if (error.response.status === 422) {
        toast("User Already Exists!");
      } else {
        toast(error.message);
      }
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
      toast("Sucessfully logged in!");
      return { foundUser, encodedToken };
    } catch (error) {
      if (error.response.status === 404) {
        toast("Please do signup first!");
      } else if (error.response.status === 401) {
        toast("The credentials you entered are invalid");
      } else {
        toast(error.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAction("auth/logout");
export const existedUser = createAction("auth/existedUser");

export const getAllUsers = createAsyncThunk("auth/getAllUsers", async () => {
  try {
    const {
      data: { users },
    } = await axios.get("/api/users");
    return users;
  } catch (error) {
    toast(error.message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(existedUser, (state) => {
        state.user = JSON.parse(localStorage.getItem("user"));
        axios.defaults.headers.common["authorization"] =
          localStorage.getItem("token");
      })
      .addCase(logout, (state) => {
        state.isLoggedIn = false;
        state.user = null;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        delete axios.defaults.headers.common["authorization"];
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.error = "";
        state.isLoading = false;
        state.user = action.payload.createdUser;
        state.isLoggedIn = true;
        localStorage.setItem("token", action.payload.encodedToken);
        localStorage.setItem(
          "user",
          JSON.stringify(action.payload.createdUser)
        );
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
        state.isLoggedIn = true;
        localStorage.setItem("token", action.payload.encodedToken);
        localStorage.setItem("user", JSON.stringify(action.payload.foundUser));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.error = "can not fetch all users";
      });
  },
});

export const authReducer = authSlice.reducer;
export const useAuth = () => useSelector((state) => state.auth);
