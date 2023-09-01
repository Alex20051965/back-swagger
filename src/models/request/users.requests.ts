import { Types } from "mongoose";

export interface IUserTodoRequest {
  userId: string;
  todo: Types.ObjectId[];
}

export interface IUpdateUserRequest {
  name?: string;
  email?: string;
  password?:string;
}

export interface IQueryRequest {
  name?: string;
  email?: string;
  password?: string;
}
