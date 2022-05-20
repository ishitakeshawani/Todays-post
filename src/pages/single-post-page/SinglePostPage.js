import React, { useState } from "react";
import { NavBar, RightSection, PostCard, LeftSidebar } from "../../components";
import { useParams } from "react-router-dom";
import { usePosts } from "../../features/posts/postSlice";
import "./singlepostpage.css";
import { addComment } from "../../features/posts/postSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SinglePostPage() {
  const [isSinglePost, setIsSinglePost] = useState(true);
  const { posts } = usePosts();
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");
  const { postId } = useParams();
  const post = posts.find((post) => post._id === postId);
  const [showModal, setShowModal] = useState(false);
  const addPostShowModal = () => {
    setShowModal(true);
  };

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
      <ToastContainer />
      <div className="homepage-section">
        <LeftSidebar isSinglePost={isSinglePost} />
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
