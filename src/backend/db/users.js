import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "test-user-id-1",
    firstName: "Erin",
    lastName: "Simmons",
    username: "erinsimms",
    password: "erinsimmons567",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Hi, My name is Erin Simmons.",
    website: "https://randomuser.me",
    posts: [],
  },
  {
    _id: "test-user-id-2",
    firstName: "Leah",
    lastName: "Nelson",
    username: "leahnel01",
    password: "12leah13",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Hi, I am frontend developer.",
    website: "https://randomuser.me",
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
    bio: "Hi, I love Javascript.",
    website: "https://javascript.info",
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
    bio: "Hi, I am 9 year old programmer.",
    website: "https://randomuser.me",
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
    bio: "My friends call me marc",
    website: "https://randomuser.me",
    posts: [],
  },
];
