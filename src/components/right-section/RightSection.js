import React from "react";

export default function RightSection() {
  return (
    <div className="right-section">
      <div className="right-section-title">Who to follow?</div>
      <div className="people-list">
        <div className="user-suggested-profile">
          <div className="profile-name">
            <img
              className="avatar"
              src="https://i.pravatar.cc/30"
              alt="profile avatar"
            />
            <div className="user-name-time">
              <div className="profilename">Ishita Keshawani</div>
              <div className="username-date">
                <div className="username">@ishita1790</div>
              </div>
            </div>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      </div>
    </div>
  );
}
