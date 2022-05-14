import "./App.css";
import {
  HomePage,
  LandingPage,
  LoginPage,
  SignUpPage,
  SinglePostPage,
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
      </Routes>
    </div>
  );
}

export default App;
