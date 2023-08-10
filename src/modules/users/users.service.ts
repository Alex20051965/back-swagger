import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  private readonly usersModel: Model<UserDocument>;

  constructor(
  @InjectModel(User.name) usersModel: Model<UserDocument>,
  ) {
    this.usersModel = usersModel;
  }

  async findAll(): Promise<User[]> {
    const response = await this.usersModel.find();
    return response;
  }

  async findOne(id: string): Promise<User> {
    const response = await this.usersModel.findById(id);
    return response;
  }

  async create(body: CreateUserDto): Promise<User> {
    const response = await this.usersModel.create(body);
    return response;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const response = await this.usersModel.findByIdAndUpdate(id, updateUserDto);
    return response;
  }

  async delete(id: string): Promise<void> {
    await this.usersModel.findByIdAndDelete(id);
  }

}
