import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../features/auth/authSlice";

export function LeftSection({ addPostShowModal, showModal, setShowModal }) {
  const { user } = useAuth();
  const userName = user.username;
  return (
    <div className="left-section">
      <NavLink className="link-no-style sidebar-item" to="/home">
        <span class="material-symbols-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink className="link-no-style sidebar-item" to="/explore">
        <span class="material-symbols-outlined">explore</span>
        <span>Explore</span>
      </NavLink>
      <NavLink className="link-no-style sidebar-item" to="/explore">
        <span class="material-symbols-outlined">bookmarks</span>
        <span>Bookmarks</span>
      </NavLink>
      <NavLink className="link-no-style sidebar-item" to="/explore">
        <span class="material-symbols-outlined">notifications</span>
        <span>Notifications</span>
      </NavLink>
      <NavLink
        className="link-no-style sidebar-item"
        to={`/profile/${userName}`}
      >
        <span class="material-symbols-outlined">account_circle</span>
        <span>Profile</span>
      </NavLink>
      <button
        className="link-no-style sidebar-item btn add-post-btn-sidebar"
        onClick={addPostShowModal}
      >
        <span>Add new post</span>
      </button>
    </div>
  );
}
