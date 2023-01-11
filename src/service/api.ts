import { IAgree } from "../interfaces/IAgree";
import { IInterest } from "../interfaces/IInterest";
import { IPost } from "../interfaces/IPost";
import { IReply } from "../interfaces/IReply";
import { Posts, Activities } from "./mocks";

export function getPosts() {
  setTimeout(() => {}, 2000);
  return Posts;
}

export function getMyActivities() {
  setTimeout(() => {}, 2000);
  return Activities;
}

export function createPost(post: IPost) {
  setTimeout(() => {}, 2000);
  Posts.data.push(post);
}

export function beInterest(interest: IInterest, postId: number) {
  Posts.data[postId].interest.push(interest);
}

export function createReply(reply: IReply, postId: number) {
  Posts.data[postId].replies.push(reply);
}

export function agree(agree: IAgree, postId: number, replyId: number) {
  Posts.data[postId].replies[replyId].agree.push(agree);
}
