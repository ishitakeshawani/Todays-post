export const isPostLiked = (user, likes) => {
  return likes?.likedBy.some((val) => val.username === user.username);
};

export const getAllPostOfUser = (posts, userId) => {
  return posts.filter((post) => post.userId === userId);
};

export const isPostBookmarked = (bookmarks, postId) => {
  return bookmarks?.some((val) => val == postId);
};
