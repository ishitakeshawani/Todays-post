export const isPostLiked = (user, likes) => {
  return likes?.likedBy.some((val) => val.username === user.username);
};
