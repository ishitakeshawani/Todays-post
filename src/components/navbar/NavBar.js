import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/authSlice";

export function NavBar() {
  const { user } = useAuth();
  const userId = user._id;
  const navigate = useNavigate();
  return (
    <nav className="navbar semibold-font-weight">
      <Link className="nav-icon-link nav-link link-no-style blue-color" to="/">
        Today's Post
      </Link>

      <div className="right-items">
        <img
          className="avatar-img"
          src={`https://ui-avatars.com/api/name=${user?.firstName}${user?.lastName}?background=0D8ABC&color=fff`}
          alt="profile avatar"
          onClick={() => navigate(`/profile/${userId}`)}
        />
      </div>
    </nav>
  );
}
