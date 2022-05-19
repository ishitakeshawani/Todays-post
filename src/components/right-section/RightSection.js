import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers, useAuth } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import {
  followUser,
  unFollowUser,
  useProfile,
} from "../../features/profile/profileSlice";
import { isAlreadyFollowing } from "../../pages";

export function RightSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, user } = useAuth();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [user,users]);
  const userList = users.filter((val) => val._id !== user._id);
  const currentUserId = user._id;
  const handleFollow = (user) => {
    if (!isAlreadyFollowing(user, currentUserId)) {
      dispatch(followUser(user._id));
    } else {
      dispatch(unFollowUser(user._id));
    }
  };

  return (
    <div className="right-section">
      <div className="right-section-title">Suggested Users</div>
      <div className="people-list">
        {userList?.map((user, index) => (
          <div className="user-suggested-profile" key={index}>
            <div className="profile-name">
              <img
                className="avatar-img-home"
                src={`https://ui-avatars.com/api/name=${user.firstName}${user.lastName}?background=1d9af1&color=fff`}
                alt="profile avatar"
                onClick={() => navigate(`/profile/${user._id}`)}
              />

              <div className="user-name-time">
                <div className="profilename">
                  {user.firstName} {user.lastName}
                </div>
                <div className="username-date">
                  <div className="username">@{user.username}</div>
                </div>
              </div>
            </div>
            <button
              className="follow-btn"
              onClick={() => handleFollow(user, user._id)}
            >
              {isAlreadyFollowing(user, currentUserId)
                ? "Following"
                : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
