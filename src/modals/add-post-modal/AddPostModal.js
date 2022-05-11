import React from "react";
import "./addpostmodal.css";

export function AddPostModal({ showModal, setShowModal }) {
  return (
    <div id="myModal" class="modal">
      <div class="">
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
                onClick={() => setShowModal(!showModal)}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
