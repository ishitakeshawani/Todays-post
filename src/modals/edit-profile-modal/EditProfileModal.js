import { React, useState, useEffect, useRef } from "react";
import { editUserData } from "../../features/profile/profileSlice";
import "./editprofilemodal.css";
import { useDispatch } from "react-redux";

export function EditProfileModal({
  showEditPostModal,
  setShowEditPostModal,
  userData,
}) {
  const [userWebsite, setUserWebsite] = useState(null);
  const [userBio, setUserBio] = useState(null);
  const dispatch = useDispatch();
  const modalAreaRef = useRef(null);
  const editProfile = () => {
    const data = {
      ...userData,
      bio: userBio.bio,
      website: userWebsite.weblink,
    };
    dispatch(editUserData({ userData: data }));
  };
  const handleClickOutSide = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(modalAreaRef.current)) {
      setShowEditPostModal(!showEditPostModal);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  return (
    <div className="modal">
      <div>
        <div className="add-post-card-edit-profile" ref={modalAreaRef}>
          <div className="profile-image-add">
            <div className="profile-image-title">Profile picture:</div>
            <input type="file" accept="image/*" title=" " />
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
                setShowEditPostModal(!showEditPostModal);
              }}
            >
              submit
            </button>
            <button
              className="btn add-post-btn"
              onClick={(e) => {
                setShowEditPostModal(!showEditPostModal);
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
