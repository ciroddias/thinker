import { IUser } from "./IUser";

export interface IReplies {
  id: string;
  user: IUser;
  agree: number;
  text: string;
  deviated: number;
  createdAt: Date;
}
