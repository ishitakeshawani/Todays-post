import { React, useState } from "react";
import { NavBar } from "../../components/navbar/NavBar";
import "./homepage.css";
import { NavLink } from "react-router-dom";
import { AddPostModal } from "../../modals";

export function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const addPostShowModal = () => {
    setShowModal(!showModal);
  };
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
          <button
            className="link-no-style sidebar-item btn add-post-btn-sidebar"
            onClick={addPostShowModal}
          >
            <span>Add new post</span>
          </button>
        </div>
        <div className="middle-section">
          {showModal && (
            <AddPostModal showModal={showModal} setShowModal={setShowModal} />
          )}

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
