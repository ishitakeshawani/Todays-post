import React from "react";
import "./editprofilemodal.css";

export function EditProfileModal({ showModal, setShowModal }) {
  return (
    <div className="modal">
      <div>
        <div className="add-post-card-edit-profile">
          <div className="profile-image-add">
            <div className="profile-image-title">Profile Image:</div>
            <img
              className="avatar"
              src="https://i.pravatar.cc/30"
              alt="profile avatar"
            />
          </div>
          <div className="profile-name-user">
            <div className="profile-title-name">Name:</div>
            <div className="profile-name-user-name">Ishita</div>
          </div>
          <div className="profile-name-user">
            <div className="profile-title-name">Username:</div>
            <div className="profile-name-user-name">Ishita</div>
          </div>
          <div className="input-website-link">
            <div className="website-link-title">Website link:</div>
            <input type="text" className="input-website"/>
          </div>
          <div className="user-bio-input">
            <div className="user-bio-title">Bio:</div>
            <textarea type="text" className="input-website"></textarea>
          </div>
          <div className="profile-btn-section">
            <button
              className="btn add-post-btn"
              onClick={(e) => {
                setShowModal(!showModal);
                // handleAddPost(e);
              }}
            >
              post
            </button>
            <button
              className="btn add-post-btn"
              onClick={(e) => {
                setShowModal(!showModal);
                // handleAddPost(e);
              }}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
