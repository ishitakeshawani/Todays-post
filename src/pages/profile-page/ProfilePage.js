import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { LeftSidebar, RightSection, NavBar, PostCard } from "../../components";
import { getAllPostOfUser } from "../../features";
import { useAuth, logout } from "../../features/auth/authSlice";
import { usePosts } from "../../features/posts/postSlice";
import {
  followUser,
  getUserById,
  unFollowUser,
  useProfile,
} from "../../features/profile/profileSlice";
import { AddPostModal, EditProfileModal } from "../../modals";
import "./profilepage.css";
import { isAlreadyFollowing } from "./utils";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const dispatch = useDispatch();
  const { posts } = usePosts();
  const { user } = useAuth();
  const currentUserId = user._id;
  const addPostShowModal = () => {
    setShowModal(true);
  };
  useEffect(() => {
    dispatch(getUserById(userId));
  }, [userId, dispatch]);
  const { userData, isLoading } = useProfile();
  const postsList = getAllPostOfUser(posts, userId);
  const isFollowing = isAlreadyFollowing(userData, currentUserId);
  const handleFollow = (followUserId) => {
    if (!isFollowing) {
      dispatch(followUser(followUserId));
    } else {
      dispatch(unFollowUser(followUserId));
    }
  };

  return (
    <div className="homepage">
      <NavBar />
      <div className="homepage-section">
        <LeftSidebar
          addPostShowModal={addPostShowModal}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        {isLoading && userData == null ? (
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
                    <div className="user-posts num">{postsList?.length}</div>
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
                {currentUserId === userId && (
                  <button
                    className="btn profile-btn"
                    onClick={() => setShowEditPostModal(true)}
                  >
                    Edit Profile
                  </button>
                )}
                {currentUserId !== userId && (
                  <button
                    className="btn profile-btn"
                    onClick={() => handleFollow(userId)}
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </button>
                )}
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
                  ? postsList.map((post, index) => (
                      <PostCard key={index} post={post} />
                    ))
                  : "You have not post anything."}
              </div>
            </div>
          </div>
        )}
        <RightSection />
      </div>
      {showModal && (
        <AddPostModal showModal={showModal} setShowModal={setShowModal} />
      )}
      {showEditPostModal && (
        <EditProfileModal
          showEditPostModal={showEditPostModal}
          setShowEditPostModal={setShowEditPostModal}
          userData={userData}
        />
      )}
    </div>
  );
};
