import React from "react";
import { useDispatch } from "react-redux";
import { isPostLiked } from "../../features";
import { useAuth } from "../../features/auth/authSlice";
import { addLikeToPost, removeLikedPost } from "../../features/posts/postSlice";

export function PostCard({ post }) {
  const { user } = useAuth();
  console.log(post.username, user.username);
  const dispatch = useDispatch();
  const isPostAlreadyLiked = isPostLiked(user, post.likes);
  console.log(isPostAlreadyLiked);
  const likePost = (id) => {
    if (!isPostAlreadyLiked) {
      dispatch(addLikeToPost(id));
    } else {
      dispatch(removeLikedPost(id));
    }
  };
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
            <button
              className="add-post-footer-btn"
              onClick={() => likePost(post._id)}
            >
              {isPostAlreadyLiked ? (
                <span class="material-symbols-sharp">favorite</span>
              ) : (
                <span class="material-symbols-outlined">favorite</span>
              )}
            </button>
            <span>{post.likes?.likeCount} </span>
          </div>
          <button className="add-post-footer-btn">
            <span class="material-symbols-outlined">comment</span>
          </button>
        </div>

        {post.username === user.username ? (
          <div className="edit-delete-bookmark">
            <button className="add-post-footer-btn">
              <span class="material-symbols-outlined">edit</span>
            </button>
            <button className="add-post-footer-btn">
              <span class="material-symbols-outlined">delete</span>
            </button>
            <button className="add-post-footer-btn">
              <span class="material-symbols-outlined">bookmark</span>
            </button>
          </div>
        ) : (
          <button className="add-post-footer-btn">
            <span class="material-symbols-outlined">bookmark</span>
          </button>
        )}
      </div>
    </div>
  );
}
