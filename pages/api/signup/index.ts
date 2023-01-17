import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { Users } from "../bd";
import { IUser } from "../interfaces/IUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;

  const id = String(Users.length);
  const passwordHash = await bcrypt.hash(password, 10);

  const user: IUser = { id, username, password: passwordHash };

  Users.push(user);

  return res.status(200).json({});
}
