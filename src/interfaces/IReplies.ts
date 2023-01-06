import { IUser } from "./IUser";

export interface IReplies {
  user: IUser;
  agree: number;
  deviated: number;
  createdAt: Date;
}
