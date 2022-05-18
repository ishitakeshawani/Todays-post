import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "test-user-id-1",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    website: "",
    posts: [],
  },
  {
    _id: "test-user-id-2",
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    website: "",
    posts: [],
  },
  {
    _id: "test-user-id-3",
    firstName: "Tyler",
    lastName: "Jordan",
    username: "tylerjordan",
    password: "tylerjordan123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    website: "",
    posts: [],
  },
  {
    _id: "test-user-id-4",
    firstName: "Annie",
    lastName: "Ozuna",
    username: "annieozuna",
    password: "annieozuna123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    website: "",
    posts: [],
  },
  {
    _id: "test-user-id-5",
    firstName: "Marcos",
    lastName: "Barrios",
    username: "marcosbarrios",
    password: "marcosbarrios123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    website: "",
    posts: [],
  },
];
