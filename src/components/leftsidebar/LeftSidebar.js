import React from "react";
import { NavLink } from "react-router-dom";

export function LeftSidebar({ addPostShowModal, showModal, setShowModal }) {
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
      path: "/profile",
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
      <button
        className="link-no-style sidebar-item btn add-post-btn-sidebar"
        onClick={addPostShowModal}
      >
        <span>Add new post</span>
      </button>
    </div>
  );
}
