import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from '../../schemas/todos.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {

  private readonly todosModel: Model<TodoDocument>;

  constructor(
  @InjectModel(Todo.name) todosModel: Model<TodoDocument>,
  ) {
    this.todosModel = todosModel;
  }

  async findAll(): Promise<Todo[]> {
    const response = await this.todosModel.find();
    return response;
  }

  async findOne(id: string): Promise<Todo> {
    const response = await this.todosModel.findById(id);
    return response;
  }

  async create(body: CreateTodoDto): Promise<Todo> {
    const response = await this.todosModel.create(body);
    return response;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const response = await this.todosModel.findByIdAndUpdate(id, updateTodoDto);
    return response;
  }

  async delete(id: string): Promise<void> {
    await this.todosModel.findByIdAndDelete(id);
  }

}
