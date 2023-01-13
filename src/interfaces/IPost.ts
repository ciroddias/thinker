import { IInterest } from "./IInterest";
import { IArgument } from "./IArgument";
import { IUser } from "./IUser";

export interface IPost {
  id: string;
  user: IUser;
  text: string;
  replies: IArgument[];
  interest: IInterest[];
  createdAt: Date;
}
