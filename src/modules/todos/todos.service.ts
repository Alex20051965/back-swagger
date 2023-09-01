import { Injectable, NotFoundException } from '@nestjs/common';
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

  async createTodo(body:CreateTodoDto, id: string): Promise<Todo> {
    const response = await this.todosModel.create({ asignee: id, ...body });
    return response;
  }

  async getAllTodo(id: string): Promise<Todo[]> {
    const response = await this.todosModel.find({ asignee: id });
    return response;
  }

  async getTodoById(_id: string, userId: string): Promise<Todo> {
    const response = await this.todosModel.findOne({ _id, asignee: userId });
    if (!response) {
      throw new NotFoundException('Todo was not found');
    }
    return response;
  }

  async updateTodo(body: UpdateTodoDto, userId: string): Promise<Todo> {
    const todo = await this.todosModel.findOneAndUpdate({ _id: body.id, asignee: userId }, body);
    if (!todo) {
      throw new NotFoundException('Todo was not found');
    }
    return todo;
  }

  async deleteTodo(id: string): Promise<void> {
    await this.todosModel.findByIdAndDelete(id);
  }

}
