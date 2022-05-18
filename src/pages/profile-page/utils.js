export const isAlreadyFollowing = (userData, userId) => {
  return userData?.followers?.some((user) => user._id === userId);
};
