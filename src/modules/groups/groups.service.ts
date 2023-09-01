import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Groups, GroupsDocument } from '../../schemas/groups.schema';
import { Todo } from '../../schemas/todos.schema';
import { User, UserDocument } from '../../schemas/users.schema';

@Injectable()
export class GroupsService {

  private readonly groupsModel: Model<GroupsDocument>;
  private readonly usersModel: Model<UserDocument>;

  constructor(
  @InjectModel(Groups.name) groupsModel: Model<GroupsDocument>,
    @InjectModel(User.name) usersModel: Model<UserDocument>,
  ) {
    this.groupsModel = groupsModel;
    this.usersModel = usersModel;
  }

  async createGroup(id: string): Promise<Groups> {
    const user = await this.usersModel.findById(id);
    if (user.group) {
      throw new ConflictException('User has group');
    }

    const group = await this.groupsModel.create({ admin: id });
    await this.usersModel.updateOne({ _id: id }, { group: group._id });
    return group;
  }

  async getGroupTodos(id: string): Promise<Todo[]> {
    const user = await this.usersModel.findById(id);
    if (!user || !user.group) {
      throw new NotFoundException('User or group not found');
    }

    const group = await this.groupsModel.findById(user.group).populate('todos');
    return group.todos as unknown as Todo[];
  }

  // async addUserToGroup(id: string): Promise<Groups> {
  //   await this.groupsModel.updateOne({_id: id});
  // }

}
