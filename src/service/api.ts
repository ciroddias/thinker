import { IAgree } from "../interfaces/IAgree";
import { IInterest } from "../interfaces/IInterest";
import { IPost } from "../interfaces/IPost";
import { IArgument } from "../interfaces/IArgument";
const api = require("axios").default;

interface ISignupAndSigninReq {
  username: string;
  password: string;
}

export async function singnup({ username, password }: ISignupAndSigninReq) {
  const { message, status } = await api.post("/api/signup", {
    username,
    password,
  });

  if (message) {
    return { status, message };
  }

  return { status };
}

export async function signin({ username, password }: ISignupAndSigninReq) {
  const { status, data, message } = await api.post("/api/signin", {
    username,
    password,
  });

  if (message) {
    return { status, message };
  }

  return { status, token: data.token };
}

export async function getPosts() {
  const { status, data } = await api.get("/api/posts");
  return { status, posts: data.posts };
}

export async function getPost(id: string) {
  const { status, data } = await api.get("/api/posts/" + id);
  return { status, post: data.post };
}

export function beInterested(interest: IInterest, postId: number) {}

export function argument(reply: IArgument, postId: number) {}

export function agree(agree: IAgree, postId: number, replyId: number) {}

export async function createPost(post: IPost) {
  const { status, data } = await api.post("/api/posts", { post });
}
