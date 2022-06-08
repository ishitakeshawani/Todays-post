import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "The purpose of our lives is to be happy.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    userId: "test-user-id-2",
    username: "leahnel01",
    firstName: "Leah",
    lastName: "Nelson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Any app that can be written in JavaScript, will eventually be written in JavaScript.",
    likes: {
      likeCount: 28,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    userId: "test-user-id-5",
    username: "marcosbarrios",
    firstName: "Marcos",
    lastName: "Barrios",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "JavaScript: Don't judge me by my bad parts, learn the good stuff and stick with that!",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    userId: "test-user-id-3",
    username: "tylerjordan",
    firstName: "Tyler",
    lastName: "Jordan",
    createdAt: "May 18, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Money and success don’t change people; they merely amplify what is already there.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    userId: "test-user-id-4",
    username: "annieozuna",
    firstName: "Annie",
    lastName: "Ozuna",
    createdAt: "May 10, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "test-user-id-1",
    comments: [],
    username: "erinsimms",
    firstName: "Erin",
    lastName: "Simmons",
    createdAt: "May 14, 2022",
    updatedAt: formatDate(),
  },
];
