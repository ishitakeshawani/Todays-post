import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../features/auth/authSlice";
import { createPost, editPost } from "../../features/posts/postSlice";
import "./addpostmodal.css";

export function AddPostModal({
  showModal,
  setShowModal,
  isPostInEditMode,
  postId,
}) {
  const [postText, setPostText] = useState("");
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleAddPost = (e) => {
    e.preventDefault();
    const { firstName, lastName, username } = user;
    const data = {
      firstName,
      lastName,
      username,
      content: postText,
    };
    if (isPostInEditMode) {
      dispatch(editPost({ postData: data, postId }));
    } else {
      dispatch(createPost(data));
    }
  };
  return (
    <div id="myModal" className="modal">
      <div>
        <div className="add-post-card">
          <div className="profile-input">
            <textarea
              name="post-input"
              id="post-input"
              cols="90"
              autoFocus
              rows="5"
              className="text-area"
              placeholder="Write something here.."
              onChange={(e) => setPostText(e.target.value)}
            ></textarea>
          </div>
          <div className="add-post-card-footer">
            <div className="add-post-card-footer-left">
              <button className="add-post-footer-btn">
                <span className="material-symbols-outlined">add_reaction</span>
              </button>
              <button className="add-post-footer-btn">
                <span class="material-symbols-outlined">
                  add_photo_alternate
                </span>
              </button>
            </div>
            <div>
              <button
                className="btn cancel-post-btn"
                onClick={() => setShowModal(!showModal)}
              >
                cancel
              </button>
              <button
                className="btn add-post-btn"
                onClick={(e) => {
                  setShowModal(!showModal);
                  handleAddPost(e);
                }}
              >
                {isPostInEditMode ? "Edit Post" : "Post"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
