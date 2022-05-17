import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../features/auth/authSlice";

export function LeftSidebar({
  addPostShowModal,
  showModal,
  setShowModal,
  isSinglePost,
}) {
  const { user } = useAuth();
  const userId = user?._id;
  const sideBarItems = [
    {
      name: "Home",
      path: "/home",
      iconName: "home",
    },
    {
      name: "Explore",
      path: "/explore",
      iconName: "explore",
    },
    {
      name: "Bookmarks",
      path: "/bookmarks",
      iconName: "bookmarks",
    },
    {
      name: "Profile",
      path: `/profile/${userId}`,
      iconName: "account_circle",
    },
  ];
  return (
    <div className="left-section">
      {sideBarItems.map(({ name, path, iconName }) => (
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "active-sidebar-item" : ""
            } link-no-style sidebar-item`
          }
          to={path}
        >
          <span class="material-symbols-outlined">{iconName}</span>
          <span>{name}</span>
        </NavLink>
      ))}
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
