import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { IUserTodoRequest } from '../../../models/request/users.requests';

export class UserTodoDto implements IUserTodoRequest {

  @ApiProperty({ example: 'userId', required: true })
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
    userId: string;

  @ApiProperty({ example: [] })
  // @IsNotEmpty()
  @IsArray()
    todo: Types.ObjectId[];

}
