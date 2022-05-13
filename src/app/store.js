import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
