import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UnavailableService } from '../dto/unavailable-service.response';
import { User } from '../dto/user-response.dto';

export const ApiCreateUserResponse = (): MethodDecorator => applyDecorators(
  ApiResponse({
    status: HttpStatus.OK,
    description: 'User profile user was created',
    type: User,
  }),
  ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Service unavailable',
    type: UnavailableService,
  }),
);

export const ApiFindOneProfileResponse = (): MethodDecorator => applyDecorators(
  ApiResponse({
    status: HttpStatus.OK,
    description: 'User profile received',
    type: User,
  }),
  ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Service unavailable',
    type: UnavailableService,
  }),
);

export const ApiFindProfileResponse = (): MethodDecorator => applyDecorators(
  ApiResponse({
    status: HttpStatus.OK,
    description: 'All users were found',
    type: User,
    isArray: true,
  }),
  ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Service unavailable',
    type: UnavailableService,
  }),
);

export const ApiUpdateProfileResponse = (): MethodDecorator => applyDecorators(
  ApiResponse({
    status: HttpStatus.OK,
    description: 'User profile has been changed',
    type: User,
  }),
  ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'error when changing user profile',
    type: UnavailableService,
  }),
);
