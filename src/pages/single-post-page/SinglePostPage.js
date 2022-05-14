import React, { useState, useEffect } from "react";
import { NavBar, RightSection, PostCard } from "../../components";
import { NavLink, useParams } from "react-router-dom";
import { usePosts } from "../../features/posts/postSlice";
import "./singlepostpage.css";

export function SinglePostPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { posts } = usePosts();
  const { postId } = useParams();
  const post = posts.find((post) => post._id === postId);

  return (
    <div className="homepage">
      <NavBar />
      <div className="homepage-section">
        <div className="left-section">
          <NavLink className="link-no-style sidebar-item" to="/home">
            <span className="material-symbols-outlined">home</span>
            <span>Home</span>
          </NavLink>
          <NavLink className="link-no-style sidebar-item" to="/explore">
            <span className="material-symbols-outlined">explore</span>
            <span>Explore</span>
          </NavLink>
          <NavLink className="link-no-style sidebar-item" to="/explore">
            <span className="material-symbols-outlined">bookmarks</span>
            <span>Bookmarks</span>
          </NavLink>
          <NavLink className="link-no-style sidebar-item" to="/explore">
            <span className="material-symbols-outlined">notifications</span>
            <span>Notifications</span>
          </NavLink>
          <NavLink className="link-no-style sidebar-item" to="/explore">
            <span className="material-symbols-outlined">account_circle</span>
            <span>Profile</span>
          </NavLink>
        </div>
        <div className="middle-section">
          <div className="posts-at-home">
            <PostCard post={post} />
            <div className="comments-section">
              <div className="input-comment-section">
                <div className="comment-profile">
                  <img
                    className="avatar"
                    src="https://i.pravatar.cc/30"
                    alt="profile avatar"
                  />
                </div>
                <div className="input-post-btn">
                  <input type="text" autoFocus className="comment-input" placeholder="Write your comment here.." />
                  <button className="btn add-post-btn">Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightSection />
      </div>
    </div>
  );
}
