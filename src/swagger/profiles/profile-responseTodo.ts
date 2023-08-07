import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ProfileData } from '../dto/get-profile-response';
import { UnavailableService } from '../dto/unavailable-service.response';

export const ApiCreateUserResponse = (): MethodDecorator => applyDecorators(
  ApiResponse({
    status: HttpStatus.OK,
    description: 'Profile was created',
    type: ProfileData,
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
    description: 'Retrieve profile',
    type: ProfileData,
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
    description: 'Retrieve profiles',
    type: Array<ProfileData>,
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
    description: 'Retrieve profiles',
    type: ProfileData,
  }),
  ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Service unavailable',
    type: UnavailableService,
  }),
);
