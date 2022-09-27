import {BaseInterface} from "./base.interface";

export interface UserInterface extends BaseInterface{
  description: string;
}


export interface FullUser extends BaseInterface  {
  postId: number;
  body: string;
}
