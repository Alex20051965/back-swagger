import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Todo } from '../../schemas/todos.schema';
import { GetUserId } from '../../shared/decorators/extract-user-id.decorator';
import { ParamIdDto } from '../../shared/dto/param-id.dto';
import { ApiGetTodosResponse, ApiFindOneTodoResponse, ApiFindTodoResponse } from '../../swagger/todos/get-todos.response.ts';
import { AuthGuard } from '../authorization/guard/authorization.guard';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todos.service';

@ApiTags('TODOS')
@ApiSecurity('JWT')
@UsePipes(new ValidationPipe())
@UseGuards(AuthGuard)
@Controller('todos')
export class TodoController {

  private readonly todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }
  @ApiFindTodoResponse()
  @Post('/')
  async createTodo(@Body() body: CreateTodoDto, @GetUserId() id: string): Promise<Todo> {
    const response = await this.todoService.createTodo(body, id);
    return response;
  }

  @ApiGetTodosResponse()
  @Get('/')
  async getAllTodo(@GetUserId() id: string): Promise<Todo[]> {
    const response = await this.todoService.getAllTodo(id);
    return response;
  }

  @ApiFindOneTodoResponse()
  @Get('/:id/by-id')
  async getTodoById(@Param() param: ParamIdDto, @GetUserId() id: string): Promise<Todo> {
    const response = await this.todoService.getTodoById(param.id, id);
    return response;
  }

  @Put('/')
  async updateTodo(@Body() body: UpdateTodoDto, @GetUserId() userId: string): Promise<Todo> {
    const response = await this.todoService.updateTodo(body, userId);
    return response;
  }

  @Delete('/:id')
  async deleteTodo(@Param('id') id: string): Promise<void> {
    await this.todoService.deleteTodo(id);
  }

}
