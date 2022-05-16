import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { LeftSection, RightSection, NavBar } from "../../components";
import { usePosts } from "../../features/posts/postSlice";
import { getUserById, useProfile } from "../../features/profile/profileSlice";
import { EditProfileModal } from "../../modals";
import "./profilepage.css";

export const ProfilePage = () => {
  const { userId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [userId, dispatch]);
  const { userData, isLoading } = useProfile();
  console.log(userData, userId);

  return (
    <div className="homepage">
      <NavBar />
      <div className="homepage-section">
        <LeftSection />
        {isLoading ? (
          <p>Loading..</p>
        ) : (
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
                  <div className="user-first-last-names">
                    {userData.firstName} {userData.lastName}
                  </div>
                  <div className="username">@{userData.username}</div>
                  <div className="user-bio">{userData.bio}</div>
                  <div className="website">
                    <span className="website-title">Website:</span>{" "}
                    <a href="http://">{userData.website}</a>
                  </div>
                </div>
                <div className="posts-follows-number">
                  <div className="user-posts">
                    <div className="user-posts num">1</div>
                    <div className="user-posts-title">Posts</div>
                  </div>
                  <div className="user-posts">
                    <div className="user-posts num">
                      {userData.followers.length}
                    </div>
                    <div className="user-posts-title">Followers</div>
                  </div>
                  <div className="user-posts">
                    <div className="user-posts num">
                      {userData.following.length}
                    </div>
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
        )}
      </div>

      {showModal && (
        <EditProfileModal showModal={showModal} setShowModal={setShowModal} userData={userData} />
      )}
    </div>
  );
};
