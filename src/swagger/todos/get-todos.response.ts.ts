import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { TodoData } from '../dto/get-profile-response';
import { UnavailableService } from '../dto/unavailable-service.response';

export const ApiGetTodosResponse = (): MethodDecorator => applyDecorators(
  ApiResponse({
    status: HttpStatus.OK,
    description: 'Todo was created',
    type: TodoData,
    isArray: true,
  }),
  ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Service unavailable',
    type: UnavailableService,
  }),
);

export const ApiFindOneTodoResponse = (): MethodDecorator => applyDecorators(
  ApiResponse({
    status: HttpStatus.OK,
    description: 'Retrieve Todo',
    type: TodoData,
  }),
  ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Service unavailable',
    type: UnavailableService,
  }),
);

export const ApiFindTodoResponse = (): MethodDecorator => applyDecorators(
  ApiResponse({
    status: HttpStatus.OK,
    description: 'Retrieve Todo',
    type: Array<TodoData>,
  }),
  ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Service unavailable',
    type: UnavailableService,
  }),
);

export const ApiUpdateTodoResponse = (): MethodDecorator => applyDecorators(
  ApiResponse({
    status: HttpStatus.OK,
    description: 'Retrieve Todo',
    type: TodoData,
  }),
  ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Service unavailable',
    type: UnavailableService,
  }),
);
