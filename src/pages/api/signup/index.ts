import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { username, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await (await clientPromise)
      .db("test")
      .collection("users")
      .insertOne({ username, password: passwordHash });

    return res.status(200).json({
      user,
    });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
}
