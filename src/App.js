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
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:postId" element={<SinglePostPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/bookmarks/:userId" element={<BookmarkPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </div>
  );
}

export default App;
