import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postReducer } from "../features";

export default configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
  },
});
