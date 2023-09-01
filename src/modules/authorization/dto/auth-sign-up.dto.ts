import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { ISignUpRequest } from '../../../models/request/authorization.requests';

export class SignUpDto implements ISignUpRequest {

  @ApiProperty({ example: 'test@test.com', required: true })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
    email: string;

  @ApiProperty({ example: '123', required: true })
  @IsNotEmpty()
  @IsString()
    password: string;

  @ApiProperty({ example: 'Tom', required: true })
  @IsNotEmpty()
  @IsString()
    name: string;

}
