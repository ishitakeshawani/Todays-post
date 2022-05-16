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
];
