import { IAgree } from "./IAgree";
import { IUser } from "./IUser";

export interface IArgument {
  id: string;
  user: IUser;
  agree: IAgree[];
  text: string;
  deviated: number;
  createdAt: Date;
}
