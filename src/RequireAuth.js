import React from "react";
import { Navigate } from "react-router-dom";

export function RequireAuth({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
