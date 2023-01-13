import type { NextApiRequest, NextApiResponse } from "next";
import { IPost } from "../../../src/interfaces/IPost";
import { Posts } from "../bd";

type Data = {
  posts: IPost[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  switch (method) {
    case "GET":
      const posts = Posts;
      res.status(200).json({ posts });
      break;
    case "POST":
      Posts.push(req.body.post);
      res.status(201).json(req.body.post);
    default:
      res.status(404);
  }
}
