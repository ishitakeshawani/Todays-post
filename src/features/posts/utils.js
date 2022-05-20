import dayjs from "dayjs";

export const isPostLiked = (user, likes) => {
  return likes?.likedBy.some((val) => val.username === user.username);
};

export const getAllPostOfUser = (posts, userId) => {
  return posts.filter((post) => post.userId === userId);
};

export const isPostBookmarked = (bookmarks, postId) => {
  return bookmarks?.some((val) => val == postId);
};

export const postsBySortType = (posts, sortType) => {
  switch (sortType) {
    case "recent":
      return [...posts].sort((a, b) =>
        dayjs(a.createdAt).isBefore(dayjs(b.createdAt)) ? 1 : -1
      );
    case "trending": {
      return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    }

    default:
      return posts;
  }
};
