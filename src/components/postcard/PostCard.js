import React from "react";

export function PostCard({ post }) {
  return (
    <div className="post">
      <div className="post-user-detail">
        <img
          className="avatar"
          src="https://i.pravatar.cc/30"
          alt="profile avatar"
        />
        <div className="user-name-time">
          <div className="profilename">
            {post.firstName} {post.lastName}
          </div>
          <div className="username-date">
            <div className="username">@{post.username}</div>
            <div className="post-date">• {post.createdAt}</div>
          </div>
        </div>
      </div>
      <div className="post-text">{post.content}</div>
      <div className="like-comment-bookmark-section">
        <div className="like-comment">
          <div className="like-count-section">
            <button className="add-post-footer-btn">
              <span class="material-symbols-outlined">favorite</span>
            </button>
            <span>{post.likes?.likeCount} </span>
          </div>

          <button className="add-post-footer-btn">
            <span class="material-symbols-outlined">comment</span>
          </button>
        </div>
        <button className="add-post-footer-btn">
          <span class="material-symbols-outlined">bookmark</span>
        </button>
      </div>
    </div>
  );
}
