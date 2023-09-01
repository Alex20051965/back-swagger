import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { IUpdateUserRequest } from '../../../models/request/users.requests';

export class UpdateUserDto implements IUpdateUserRequest {

  @ApiPropertyOptional({ example: 'Vasy', required: false })
  @IsOptional()
  @IsString()
    name?: string;

  @ApiPropertyOptional({ example: 'test@test.com', required: true })
  @IsString()
  @IsEmail()
  @IsOptional()
    email?: string;

  @ApiPropertyOptional({ example: '123', required: true })
  @IsString()
  @IsOptional()
    password?: string;

}
