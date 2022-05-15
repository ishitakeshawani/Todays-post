import { React, useState, useEffect } from "react";
import { LeftSection, RightSection, NavBar } from "../../components";
import { EditProfileModal } from "../../modals";
import "./profilepage.css";

export const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="homepage">
      <NavBar />
      <div className="homepage-section">
        <LeftSection />
        <div className="profile-middle-section">
          <div className="profile-section">
            <div className="profile-left">
              <div className="profile-details">
                <div className="profile-picture">
                  <img
                    className="avatar"
                    src="https://i.pravatar.cc/150"
                    alt="profile avatar"
                  />
                </div>
                <div className="user-first-last-names">Ishita Keshawani</div>
                <div className="username">@ishita</div>
                <div className="user-bio">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto in laborum ipsum! Recusandae ipsum eveniet maxime
                </div>
                <div className="website">
                  <span className="website-title">Website:</span>{" "}
                  <a href="http://"></a>link here
                </div>
              </div>
              <div className="posts-follows-number">
                <div className="user-posts">
                  <div className="user-posts num">1</div>
                  <div className="user-posts-title">Posts</div>
                </div>
                <div className="user-posts">
                  <div className="user-posts num">1</div>
                  <div className="user-posts-title">Followers</div>
                </div>
                <div className="user-posts">
                  <div className="user-posts num">1</div>
                  <div className="user-posts-title">Following</div>
                </div>
              </div>
            </div>
            <div className="profile-right">
              <button
                className="btn profile-btn"
                onClick={() => setShowModal(true)}
              >
                Edit Profile
              </button>
              <button className="btn profile-btn">Logout</button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <EditProfileModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};
