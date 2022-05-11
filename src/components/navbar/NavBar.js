import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar semibold-font-weight">
      <Link className="nav-icon-link nav-link link-no-style blue-color" to="/">
        Today's Post
      </Link>

      <div className="right-items">
        <img
          className="avatar"
          src="https://i.pravatar.cc/30"
          alt="profile avatar"
        />
      </div>
    </nav>
  );
}
