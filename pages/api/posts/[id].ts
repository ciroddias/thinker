import type { NextApiRequest, NextApiResponse } from "next";
import { IPost } from "../../../src/interfaces/IPost";
import { Posts } from "../bd";

type Data = {
  post: IPost;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req;
  const post = Posts.find((post) => post.id === query.id) as IPost;
  res.status(200).json({ post });
}
