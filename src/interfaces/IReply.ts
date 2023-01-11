import { IAgree } from "./IAgree";
import { IUser } from "./IUser";

export interface IReply {
  id: string;
  user: IUser;
  agree: IAgree[];
  text: string;
  deviated: number;
  createdAt: Date;
}
