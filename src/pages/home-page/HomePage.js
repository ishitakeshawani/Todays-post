import React from "react";
import { NavBar } from "../../components/navbar/NavBar";
import "./homepage.css";
import { NavLink } from "react-router-dom";

export function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <div className="homepage-section">
        <div className="left-section">
          <NavLink className="link-no-style sidebar-item" to="/">
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
          <NavLink className="link-no-style sidebar-item" to="/explore">
            <span class="material-symbols-outlined">account_circle</span>
            <span>Profile</span>
          </NavLink>
        </div>
        <div className="middle-section">
          <div className="add-post-card">
            <div className="profile-input">
              <img
                className="avatar"
                src="https://i.pravatar.cc/30"
                alt="profile avatar"
              />
              <textarea
                name="post-input"
                id="post-input"
                cols="90"
                rows="5"
                className="text-area"
                placeholder="Write something here.."
              ></textarea>
            </div>
            <div className="add-post-card-footer">
              <div className="add-post-card-footer-left">
                <button className="add-post-footer-btn">
                  <span className="material-symbols-outlined">
                    add_reaction
                  </span>
                </button>
                <button className="add-post-footer-btn">
                  <span class="material-symbols-outlined">
                    add_photo_alternate
                  </span>
                </button>
              </div>
              <button className="btn add-post-btn">Post</button>
            </div>
          </div>
          <div className="latest-post-title">Latest Posts</div>
          <div className="posts-at-home">
            <div className="post">
              <div className="post-user-detail">
                <img
                  className="avatar"
                  src="https://i.pravatar.cc/30"
                  alt="profile avatar"
                />
                <div className="user-name-time">
                  <div className="profilename">Ishita Keshawani</div>
                  <div className="username-date">
                    <div className="username">@ishita1790</div>
                    <div className="post-date">• 10 May</div>
                  </div>
                </div>
              </div>
              <div className="post-text">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores lor repellendus.
              </div>
              <div className="like-comment-bookmark-section">
                <div className="like-comment">
                  <button className="add-post-footer-btn">
                    <span class="material-symbols-outlined">favorite</span>
                  </button>
                  <button className="add-post-footer-btn">
                    <span class="material-symbols-outlined">comment</span>
                  </button>
                </div>
                <button className="add-post-footer-btn">
                  <span class="material-symbols-outlined">bookmark</span>
                </button>
              </div>
            </div>
            <div className="post">
              <div className="post-user-detail">
                <img
                  className="avatar"
                  src="https://i.pravatar.cc/30"
                  alt="profile avatar"
                />
                <div className="user-name-time">
                  <div className="profilename">Ishita Keshawani</div>
                  <div className="username-date">
                    <div className="username">@ishita1790</div>
                    <div className="post-date">• 10 May</div>
                  </div>
                </div>
              </div>
              <div className="post-text">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores lor repellendus.
              </div>
              <div className="like-comment-bookmark-section">
                <div className="like-comment">
                  <button className="add-post-footer-btn">
                    <span class="material-symbols-outlined">favorite</span>
                  </button>
                  <button className="add-post-footer-btn">
                    <span class="material-symbols-outlined">comment</span>
                  </button>
                </div>
                <button className="add-post-footer-btn">
                  <span class="material-symbols-outlined">bookmark</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="right-section-title">Who to follow?</div>
          <div className="people-list">
            <div className="user-suggested-profile">
              <div className="profile-name">
                <img
                  className="avatar"
                  src="https://i.pravatar.cc/30"
                  alt="profile avatar"
                />
                <div className="user-name-time">
                  <div className="profilename">Ishita Keshawani</div>
                  <div className="username-date">
                    <div className="username">@ishita1790</div>
                  </div>
                </div>
              </div>
              <button className="follow-btn">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
