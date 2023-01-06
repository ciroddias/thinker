import { IReplies } from "./IReplies";
import { IUser } from "./IUser";

export interface IPost {
  id: string;
  user: IUser;
  text: string;
  replies: IReplies[];
  interest: number;
  createdAt: Date;
}
