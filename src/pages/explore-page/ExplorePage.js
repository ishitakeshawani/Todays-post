import { React, useState, useEffect } from "react";
import { NavBar } from "../../components/navbar/NavBar";
import { AddPostModal } from "../../modals";
import { usePosts, getAllPosts } from "../../features/posts/postSlice";
import { useDispatch } from "react-redux";
import { LeftSidebar, PostCard, RightSection } from "../../components";

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
              <p>Loading..</p>
            ) : posts.length > 0 ? (
              posts.map((post, index) => <PostCard key={index} post={post} />)
            ) : (
              "loading"
            )}
          </div>
        </div>
        <RightSection />
      </div>
    </div>
  );
}
