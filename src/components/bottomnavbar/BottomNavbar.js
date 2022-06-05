import React from "react";
import { NavLink } from "react-router-dom";
import "./bottomnavbar.css";
import { useAuth } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

export function BottomNavbar() {
  const { user, isLoggedIn } = useAuth();
  const userId = user?._id;
  const dispatch = useDispatch();
  return (
    <div className="bottom-navbar">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `${isActive ? "current-item" : ""} link-no-style icon`
        }
      >
        <span className="link-no-style material-symbols-outlined">Home</span>
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          `${isActive ? "current-item" : ""} link-no-style icon`
        }
      >
        <span className="link-no-style material-symbols-outlined">Explore</span>
      </NavLink>
      <NavLink
        to={`/bookmarks/${userId}`}
        className={({ isActive }) =>
          `${isActive ? "current-item" : ""} link-no-style icon`
        }
      >
        <span className="link-no-style material-symbols-outlined">
          bookmarks
        </span>
      </NavLink>
      <NavLink
        to={`/profile/${userId}`}
        className={({ isActive }) =>
          `${isActive ? "current-item" : ""} link-no-style icon`
        }
      >
        <span className="link-no-style material-symbols-outlined">
          account_circle
        </span>
      </NavLink>
      <NavLink
        to="/login"
        onClick={() => {
          dispatch(logout());
        }}
        className={({ isActive }) =>
          `${isActive ? "current-item" : ""} link-no-style icon`
        }
      >
        <span className="link-no-style material-symbols-outlined">logout</span>
      </NavLink>
    </div>
  );
}
