import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { isPostBookmarked, isPostLiked } from "../../features";
import { useAuth } from "../../features/auth/authSlice";
import {
  addLikeToPost,
  removeLikedPost,
  usePosts,
  setEditPostMode,
  deletePost,
  addToBookMark,
  removeFromBookMark,
} from "../../features/posts/postSlice";
import { AddPostModal } from "../../modals";
import { Link, useNavigate } from "react-router-dom";

export function PostCard({ post }) {
  const [showModal, setShowModal] = useState(false);
  const { isPostInEditMode, bookmarks, isLikePostLoading } = usePosts();
  const { user } = useAuth();
  const navigate = useNavigate();
  const userName = user?.username;
  const userId = user?._id;
  const dispatch = useDispatch();
 
  const isPostAlreadyLiked = isPostLiked(user, post.likes);
  const isPostAlreadyBookmarked = isPostBookmarked(bookmarks, post._id);

  const likePost = (id) => {
    !isPostAlreadyLiked
      ? dispatch(addLikeToPost(id))
      : dispatch(removeLikedPost(id));
  };

  const handleEditPost = (post) => {
    setShowModal(true);
    dispatch(setEditPostMode(true));
  };
  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };
  const handleBookmark = (postId) => {
    if (!isPostAlreadyBookmarked) {
      dispatch(addToBookMark(postId));
    } else {
      dispatch(removeFromBookMark(postId));
    }
  };

  return (
    <div className="post">
      {showModal && (
        <AddPostModal
          showModal={showModal}
          setShowModal={setShowModal}
          isPostInEditMode={isPostInEditMode}
          postId={post._id}
        />
      )}
      <div className="post-user-detail">
        <img
          className="avatar-img-home"
          src={`https://ui-avatars.com/api/name=${post?.firstName}${post?.lastName}?background=1d9af1&color=fff`}
          alt="profile avatar"
          onClick={() => navigate(`/profile/${post.userId}`)}
          title={post.username}
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
              className={
                isPostAlreadyLiked
                  ? "add-post-footer-btn-blue"
                  : "add-post-footer-btn"
              }
              onClick={() => likePost(post._id)}
            > 
              {isPostAlreadyLiked ? (
                <span className="material-symbols-sharp">favorite</span>
              ) : (
                <span className="material-symbols-outlined">favorite</span>
              )}
            </button>
            <span>{post.likes?.likeCount} </span>
          </div>
          <div className="like-count-section">
            <Link className="add-post-footer-btn" to={`/post/${post._id}`}>
              <span className="material-symbols-outlined">comment</span>
            </Link>
            <span>
              {post?.comments?.length == 0 ? "0" : post?.comments?.length}{" "}
            </span>
          </div>
        </div>

        {post.username === user.username ? (
          <div className="edit-delete-bookmark">
            <button
              className="add-post-footer-btn"
              onClick={() => handleEditPost()}
            >
              <span className="material-symbols-outlined">edit</span>
            </button>
            <button
              className="add-post-footer-btn"
              onClick={() => handleDeletePost(post._id)}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
            <button
              className={
                isPostAlreadyBookmarked
                  ? "add-post-footer-btn-blue"
                  : "add-post-footer-btn"
              }
              onClick={() => handleBookmark(post._id)}
            >
              {isPostAlreadyBookmarked ? (
                <span className="material-symbols-sharp">bookmark</span>
              ) : (
                <span className="material-symbols-outlined">bookmark</span>
              )}
            </button>
          </div>
        ) : (
          <button
            className={
              isPostAlreadyBookmarked
                ? "add-post-footer-btn-blue"
                : "add-post-footer-btn"
            }
            onClick={() => handleBookmark(post._id)}
          >
            {isPostAlreadyBookmarked ? (
              <span className="material-symbols-sharp">bookmark</span>
            ) : (
              <span className="material-symbols-outlined">bookmark</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
