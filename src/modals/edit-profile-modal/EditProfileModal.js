import { React, useState } from "react";
import { editUserData } from "../../features/profile/profileSlice";
import "./editprofilemodal.css";
import { useDispatch } from "react-redux";

export function EditProfileModal({ showModal, setShowModal, userData }) {
  const [userWebsite, setUserWebsite] = useState(null);
  const [userBio, setUserBio] = useState(null);
  const dispatch = useDispatch();
  console.log(userWebsite, userBio);
  const editProfile = () => {
    const data = {
      ...userData,
      bio: userBio.bio,
      website: userWebsite.weblink,
    };
    console.log(data);
    dispatch(editUserData({ userData: data }));
  };
  return (
    <div className="modal">
      <div>
        <div className="add-post-card-edit-profile">
          <div className="profile-image-add">
            <div className="profile-image-title">Profile picture:</div>
            <input type="file" accept="image/*" title=" "/>
          </div>
          <div className="profile-name-user">
            <div className="profile-title-name">Name:</div>
            <div className="profile-name-user-name">
              {userData?.firstName} {userData?.lastName}
            </div>
          </div>
          <div className="profile-name-user">
            <div className="profile-title-name">Username:</div>
            <div className="profile-name-user-name">{userData?.username}</div>
          </div>
          <div className="input-website-link">
            <div className="website-link-title">Website link: </div>
            <input
              type="text"
              className="input-website"
              required
              onChange={(e) =>
                setUserWebsite((prev) => ({ ...prev, weblink: e.target.value }))
              }
            />
          </div>
          <div className="user-bio-input">
            <div className="user-bio-title">Bio:</div>
            <textarea
              type="text"
              className="input-website"
              required
              onChange={(e) =>
                setUserBio((prev) => ({ ...prev, bio: e.target.value }))
              }
            ></textarea>
          </div>
          <div className="profile-btn-section">
            <button
              className="btn add-post-btn"
              onClick={(e) => {
                editProfile();
                setShowModal(!showModal);
              }}
            >
              submit
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
