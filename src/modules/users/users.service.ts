import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { IUpdateUserRequest, IUserTodoRequest } from '../../models/request/users.requests';
import { User, UserDocument } from '../../schemas/users.schema';

@Injectable()
export class UserService {

  private readonly usersModel: Model<UserDocument>;

  constructor(
  @InjectModel(User.name) usersModel: Model<UserDocument>,
  ) {
    this.usersModel = usersModel;
  }

  async getAllUsers(): Promise<User[]> {
    const response = await this.usersModel.find().populate('todos');
    return response;
  }

  async getUserById(id: string): Promise<User> {
    const response = await this.usersModel.findById(id).populate('todos');
    return response;
  }

  async updateUser(id: string, body: IUpdateUserRequest): Promise<User> {
    const { password } = body;
    const hash = await bcrypt.hash(password, 10);
    const response = await this.usersModel.findByIdAndUpdate(id, { ...body, password: hash });

    return response;
  }

  async addTodos(body: IUserTodoRequest): Promise<unknown> {
    const user = await this.usersModel.findById(body.userId);
    user.todos = [...user.todos, ...body.todo];
    await user.save();
    // const result = await this.usersModel.findOne(
    //   { _id: body.userId },
    //   { $push: { todos: body.todo } },
    //   { new: true },
    // );
    return user;
  }
  async deleteUser(id: string): Promise<void> {
    await this.usersModel.findByIdAndDelete(id);
  }


}
