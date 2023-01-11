import { IInterest } from "./IInterest";
import { IReply } from "./IReply";
import { IUser } from "./IUser";

export interface IPost {
  id: string;
  user: IUser;
  text: string;
  replies: IReply[];
  interest: IInterest[];
  createdAt: Date;
}
