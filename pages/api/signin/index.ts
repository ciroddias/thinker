import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  return res.status(200).json({ token: "" });
}
