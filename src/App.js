import { React, useEffect } from "react";
import "./App.css";
import {
  HomePage,
  LandingPage,
  LoginPage,
  ProfilePage,
  SignUpPage,
  SinglePostPage,
  BookmarkPage,
  ExplorePage,
} from "./pages";
import { Routes, Route, useNavigate } from "react-router-dom";
import { existedUser, useAuth } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";
import { RequireAuth } from "./RequireAuth";

function App() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={isLoggedIn ? <HomePage /> : <LoginPage />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/post/:postId"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <SinglePostPage />
            </RequireAuth>
          }
        />
        <Route
          path="/profile/:userId"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path="/bookmarks/:userId"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <BookmarkPage />
            </RequireAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <ExplorePage />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
