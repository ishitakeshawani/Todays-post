import { React, useState, useEffect } from "react";
import { NavBar } from "../../components/navbar/NavBar";
import { AddPostModal } from "../../modals";
import { usePosts, getAllPosts } from "../../features/posts/postSlice";
import { useDispatch } from "react-redux";
import { BottomNavbar, LeftSidebar, PostCard, RightSection } from "../../components";
import * as Mui from "@material-ui/core";

export function ExplorePage() {
  const [showModal, setShowModal] = useState(false);
  const { posts, isLoading } = usePosts();
  const dispatch = useDispatch();
  const addPostShowModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
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
            {isLoading ? (
              <Mui.Grid container justify="center">
                <Mui.CircularProgress />
              </Mui.Grid>
            ) : posts.length > 0 ? (
              posts.map((post, index) => <PostCard key={index} post={post} />)
            ) : (
              <Mui.Grid container justify="center">
                <Mui.CircularProgress />
              </Mui.Grid>
            )}
          </div>
        </div>
        <RightSection />
      </div>
      <BottomNavbar />
    </div>
  );
}
