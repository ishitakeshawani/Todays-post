import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { LeftSection, RightSection, NavBar, PostCard } from "../../components";
import { getAllPostOfUser } from "../../features";
import { useAuth, logout } from "../../features/auth/authSlice";
import { usePosts } from "../../features/posts/postSlice";
import { getUserById, useProfile } from "../../features/profile/profileSlice";
import { EditProfileModal } from "../../modals";
import "./profilepage.css";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showAddPostModal, setShowAddPostModal] = useState(false);
  const dispatch = useDispatch();
  const { posts } = usePosts();
  const { user } = useAuth();
  const currentUserId = user._id;
  const addPostShowModal = () => {
    console.log("clicked")
    setShowAddPostModal(!showAddPostModal);
  };
  console.log(posts, user);
  useEffect(() => {
    dispatch(getUserById(userId));
  }, [userId, dispatch]);
  const { userData, isLoading } = useProfile();
  console.log(userData, userId);
  const postsList = getAllPostOfUser(posts, userId);

  return (
    <div className="homepage">
      <NavBar />
      <div className="homepage-section">
        <LeftSection addPostShowModal={addPostShowModal} />
        {isLoading && userData != null ? (
          <p>Loading..</p>
        ) : (
          <div className="profile-middle-section">
            <div className="profile-section">
              <div className="profile-left">
                <div className="profile-details">
                  <div className="profile-picture">
                    <img
                      className="avatar"
                      src={`https://ui-avatars.com/api/name=${userData?.firstName}${userData?.lastName}?background=0D8ABC&color=fff`}
                      alt="profile avatar"
                    />
                  </div>
                  <div className="user-first-last-names">
                    {userData?.firstName} {userData?.lastName}
                  </div>
                  <div className="username">@{userData?.username}</div>
                  <div className="user-bio">{userData?.bio}</div>
                  <div className="website">
                    <span className="website-title">Website:</span>{" "}
                    <a href={userData?.website} target="_blank">
                      {userData?.website}
                    </a>
                  </div>
                </div>
                <div className="posts-follows-number">
                  <div className="user-posts">
                    <div className="user-posts num">1</div>
                    <div className="user-posts-title">Posts</div>
                  </div>
                  <div className="user-posts">
                    <div className="user-posts num">
                      {userData?.followers.length}
                    </div>
                    <div className="user-posts-title">Followers</div>
                  </div>
                  <div className="user-posts">
                    <div className="user-posts num">
                      {userData?.following.length}
                    </div>
                    <div className="user-posts-title">Following</div>
                  </div>
                </div>
              </div>
              <div className="profile-right">
                <button
                  className="btn profile-btn"
                  onClick={() =>
                    currentUserId === userId ? setShowModal(true) : ""
                  }
                >
                  {currentUserId === userId ? "Edit Profile" : "Follow"}
                </button>
                {currentUserId === userId && (
                  <button
                    className="btn profile-btn"
                    onClick={() => {
                      dispatch(logout());
                      navigate("/login");
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
            <div className="recent-posts-section">
              <div className="recent-posts-title">Recent Posts</div>
              <div className="posts-at-profile">
                {postsList.length > 0
                  ? postsList.map((post) => <PostCard post={post} />)
                  : "You have not post anything."}
              </div>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <EditProfileModal
          showModal={showModal}
          setShowModal={setShowModal}
          userData={userData}
        />
      )}
    </div>
  );
};
