import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Todo } from '../../schemas/todos.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todos.service';

@ApiTags('TODOS')
@UsePipes(new ValidationPipe())
@Controller('todos')
export class TodoController {

  private readonly todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  @Get()
  async index(): Promise<Todo[]> {
    const response = await this.todoService.findAll();
    return response;
  }

  @Get(':id')
  async find(@Param() param: ParamIdDto): Promise<Todo> {
    const response = await this.todoService.findOne(id);
    return response;
  }

  @Post()
  async create(@Body() body: CreateTodoDto): Promise<Todo> {
    const response = await this.todoService.create(body);
    return response;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateTodoDto): Promise<Todo> {
    const response = await this.todoService.update(id, body);
    return response;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.todoService.delete(id);
  }

}
