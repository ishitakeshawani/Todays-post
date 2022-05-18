import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postReducer, profileReducer } from "../features";


export default configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    profile: profileReducer
  },
});
