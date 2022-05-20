import { React, useState, useEffect } from "react";
import { NavBar } from "../../components/navbar/NavBar";
import "./homepage.css";
import { AddPostModal } from "../../modals";
import {
  usePosts,
  getAllPosts,
  createPost,
  setSortType,
} from "../../features/posts/postSlice";
import { useDispatch } from "react-redux";
import { LeftSidebar, PostCard, RightSection } from "../../components";
import { useAuth, existedUser } from "../../features/auth/authSlice";
import { postsBySortType } from "../../features/posts/utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Mui from "@material-ui/core";

export function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const { posts, isLoading, sortType } = usePosts();
  const { user } = useAuth();
  const [postText, setPostText] = useState("");
  const dispatch = useDispatch();
  const addPostShowModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      dispatch(existedUser());
    }
  }, []);

  const postList = postsBySortType(posts, sortType);

  const handleAddPost = (e) => {
    e.preventDefault();
    const { firstName, lastName, username } = user;
    const data = {
      firstName,
      lastName,
      username,
      content: postText,
    };

    dispatch(createPost(data));
    setPostText("");
  };

  return (
    <div className="homepage">
      <NavBar />
      <ToastContainer />
      <div className="homepage-section">
        <LeftSidebar
          addPostShowModal={addPostShowModal}
          showModal={showModal}
          setShowModal={setShowModal}
        />

        <div className="middle-section">
          {showModal && (
            <AddPostModal showModal={showModal} setShowModal={setShowModal} />
          )}

          <div className="posts-at-home">
            <div className="sort-by-section">
              <div>Sort By :</div>
              <div className="sortby-chips">
                <button
                  className={`"btn sort-by-btn" ${
                    sortType == "trending"
                      ? "btn sort-by-btn-blue"
                      : "btn sort-by-btn"
                  }`}
                  onClick={() => {
                    dispatch(setSortType("trending"));
                  }}
                >
                  Trending
                </button>
                <button
                  className={`"btn sort-by-btn" ${
                    sortType == "recent"
                      ? "btn sort-by-btn-blue"
                      : "btn sort-by-btn"
                  }`}
                  onClick={() => {
                    dispatch(setSortType("recent"));
                  }}
                >
                  Recent
                </button>

                <button
                  className={`"btn sort-by-btn" ${
                    sortType == "reset"
                      ? "btn sort-by-btn-blue"
                      : "btn sort-by-btn"
                  }`}
                  onClick={() => {
                    console.log(postList);
                    dispatch(setSortType("reset"));
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="post-card-home">
              <img
                className="avatar-img-home"
                src={`https://ui-avatars.com/api/name=${user?.firstName}${user?.lastName}?background=1d9af1&color=fff`}
                alt="profile avatar"
                onClick={() => navigate(`/profile/${user.userId}`)}
                title={user.username}
              />
              <div>
                <div className="profile-input">
                  <textarea
                    name="post-input"
                    id="post-input"
                    cols="60"
                    autoFocus
                    rows="3"
                    value={postText}
                    className="text-area"
                    placeholder="Write something here.."
                    onChange={(e) => setPostText(e.target.value)}
                  ></textarea>
                </div>
                <div className="add-post-card-footer">
                  <div className="add-post-card-footer-right">
                    <button
                      className="btn cancel-post-btn"
                      onClick={() => setPostText("")}
                    >
                      cancel
                    </button>
                    <button
                      className="btn add-post-btn"
                      onClick={(e) => {
                        handleAddPost(e);
                      }}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {isLoading ? (
              <Mui.Grid container justify="center">
                <Mui.CircularProgress />
              </Mui.Grid>
            ) : postList?.length > 0 ? (
              postList?.map((post, index) => (
                <PostCard key={index} post={post} />
              ))
            ) : (
              "can not find posts"
            )}
          </div>
        </div>
        <RightSection />
      </div>
    </div>
  );
}
