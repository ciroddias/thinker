import { IAgree } from "../interfaces/IAgree";
import { IInterest } from "../interfaces/IInterest";
import { IPost } from "../interfaces/IPost";
import { IArgument } from "../interfaces/IArgument";
const api = require("axios").default;

interface ISigninReq {
  email: string;
  password: string;
}

export async function signin({ email, password }: ISigninReq) {
  const { status, data } = await api.post("api/signin", { email, password });
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
