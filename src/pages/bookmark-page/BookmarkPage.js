import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { LeftSidebar, RightSection, NavBar, PostCard } from "../../components";
import { getBookmarkedPosts, usePosts } from "../../features/posts/postSlice";
import { AddPostModal } from "../../modals";
import "./bookmark.css";
import * as Mui from "@material-ui/core";

export function BookmarkPage() {
  const [showModal, setShowModal] = useState(false);
  const { bookmarks, isLoading, posts } = usePosts();
  const addPostShowModal = () => {
    setShowModal(!showModal);
  };
  const dispatch = useDispatch();
  const bookmarkedPosts = posts.filter((post) => bookmarks?.includes(post._id));
  useEffect(() => {
    dispatch(getBookmarkedPosts());
  }, [dispatch]);

  return (
    <div>
      <div className="homepage">
        <NavBar />
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
              <p className="bookmarks-title">Your Bookmarks</p>
              {isLoading ? (
                <Mui.Grid container justify="center">
                  <Mui.CircularProgress />
                </Mui.Grid>
              ) : bookmarkedPosts.length > 0 ? (
                bookmarkedPosts.map((post, index) => (
                  <PostCard key={index} post={post} />
                ))
              ) : (
                <p className="bookmark-text">
                  You do not have any bookmarked posts.
                </p>
              )}
            </div>
          </div>
          <RightSection />
        </div>
      </div>
    </div>
  );
}
