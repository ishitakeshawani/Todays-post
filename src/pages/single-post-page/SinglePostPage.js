import React, { useState } from "react";
import { NavBar, RightSection, PostCard } from "../../components";
import { NavLink, useParams } from "react-router-dom";
import { usePosts } from "../../features/posts/postSlice";
import "./singlepostpage.css";
import { addComment } from "../../features/posts/postSlice";
import { useDispatch } from "react-redux";

export function SinglePostPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { posts } = usePosts();
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");
  const { postId } = useParams();
  const post = posts.find((post) => post._id === postId);

  const addCommentToPost = (postId) => {
    dispatch(addComment({ postId, comment: commentText }));
    setCommentText((prevComment) => ({ ...prevComment, comment: "" }));
  };

  const handleCommentChange = (e) => {
    setCommentText((prevComment) => ({
      ...prevComment,
      comment: e.target.value,
    }));
  };

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
                  <input
                    type="text"
                    autoFocus
                    value={commentText.comment}
                    className="comment-input"
                    onChange={(e) => handleCommentChange(e)}
                    placeholder="Write your comment here.."
                  />
                  <button
                    className="btn add-post-btn"
                    onClick={() => addCommentToPost(postId)}
                  >
                    Post
                  </button>
                </div>
              </div>
              {post.comments.length > 0 &&
                post.comments.map(
                  ({ firstName, lastName, username, createdAt, comment }) => (
                    <div className="post">
                      <div className="post-user-detail">
                        <img
                          className="avatar"
                          src="https://i.pravatar.cc/30"
                          alt="profile avatar"
                        />
                        <div className="user-name-time">
                          <div className="profilename">
                            {firstName} {lastName}
                          </div>
                          <div className="username-date">
                            <div className="username">@{username}</div>
                            <div className="post-date">• {createdAt}</div>
                          </div>
                        </div>
                      </div>
                      <div className="post-text">{comment}</div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
        <RightSection />
      </div>
    </div>
  );
}
