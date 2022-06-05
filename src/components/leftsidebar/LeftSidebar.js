import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../features/auth/authSlice";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

export function LeftSidebar({
  addPostShowModal,
  showModal,
  setShowModal,
  isSinglePost,
}) {
  const { user, isLoggedIn } = useAuth();
  const userId = user?._id;
  const dispatch = useDispatch();
  const sideBarItems = [
    {
      name: "Home",
      path: "/home",
      iconName: "home",
      id: nanoid(),
    },
    {
      name: "Explore",
      path: "/explore",
      iconName: "explore",
      id: nanoid(),
    },
    {
      name: "Bookmarks",
      path: `/bookmarks/${userId}`,
      iconName: "bookmarks",
      id: nanoid(),
    },
    {
      name: "Profile",
      path: `/profile/${userId}`,
      iconName: "account_circle",
      id: nanoid(),
    },
  ];
  return (
    <div className="left-section">
      {sideBarItems.map(({ name, path, iconName, id }) => (
        <NavLink
          key={id}
          className={({ isActive }) =>
            `${
              isActive ? "active-sidebar-item" : ""
            } link-no-style sidebar-item`
          }
          to={path}
        >
          <span className="material-symbols-outlined">{iconName}</span>
          <span className="sidebar-item-text">{name}</span>
        </NavLink>
      ))}
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "active-sidebar-item" : ""} link-no-style sidebar-item`
        }
        to="/login"
        onClick={() => {
          dispatch(logout());
        }}
      >
        <span className="material-symbols-outlined">
          {isLoggedIn ? "Logout" : "Login"}
        </span>
        <span className="sidebar-item-text">
          {isLoggedIn ? "Logout" : "Login"}
        </span>
      </NavLink>
      {!isSinglePost && (
        <button
          className="link-no-style sidebar-item btn add-post-btn-sidebar"
          onClick={addPostShowModal}
        >
          <span>Add new post</span>
        </button>
      )}
    </div>
  );
}
