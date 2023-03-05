import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { Users } from "../bd";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;
  const user = Users.find((user) => user.username === username);

  if (!user) return res.status(404).json({ message: "User not found!" });

  const passwordMatch = await bcrypt.compare(
    password,
    user?.password as string
  );

  const accessToken = jsonwebtoken.sign(
    { id: user?.id, username: user?.username },
    process.env.JWT_AUTH_SECRET as string
  );

  if (passwordMatch) {
    return res.status(200).json({
      token: accessToken,
    });
  }
}
