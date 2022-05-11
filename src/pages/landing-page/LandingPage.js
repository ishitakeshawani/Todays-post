import React from "react";
import landingpageimage from "../../assets/images/landing-page-image.svg";
import "./landingpage.css";
import { Link, useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="landing-page-section">
        <div className="landing-page-description">
          <div className="project-name">
            Today's <span className="post-title">Post</span>
          </div>
          <div className="landing-page-sub-section">
            <div className="landing-page-desc">
              <div className="desc-text">FOLLOW</div>
              <div className="desc-sub-text">People Around The Globe</div>
            </div>
            <div className="landing-page-desc">
              <div className="desc-text">CONNECT</div>
              <div className="desc-sub-text">With Your Friends</div>
            </div>
            <div className="landing-page-desc">
              <div className="desc-text">SHARE</div>
              <div className="desc-sub-text">What You Thinking</div>
            </div>
          </div>
          <div className="landing-page-bottom">
            <button
              className="btn join-now"
              onClick={() => navigate("/signup")}
            >
              Join Now
            </button>
            <Link to="/login" className="link-no-style blue-color">
              Already have an account?
            </Link>
          </div>
        </div>
        <div>
          <img
            src={landingpageimage}
            alt="landing-page-image"
            className="landing-page-img"
          />
        </div>
      </div>
    </div>
  );
};
