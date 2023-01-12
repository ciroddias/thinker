import { IAgree } from "../interfaces/IAgree";
import { IInterest } from "../interfaces/IInterest";
import { IPost } from "../interfaces/IPost";
import { IReply } from "../interfaces/IReply";
const { get } = require("axios").default;

export async function getPosts() {
  const { status, data } = await get("/api/posts");
  return { status, posts: data.posts };
}

export async function getPost(id: string) {
  const { status, data } = await get("/api/posts/" + id);
  return { status, post: data.post };
}

export function createPost(post: IPost) {}

export function beInterested(interest: IInterest, postId: number) {}

export function createReply(reply: IReply, postId: number) {}

export function agree(agree: IAgree, postId: number, replyId: number) {}
