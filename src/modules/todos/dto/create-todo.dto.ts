import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ITodoRequest } from '../../../models/request/todos.requests';


export class CreateTodoDto implements ITodoRequest {

  @ApiProperty({ example: 'ya gay', required: true })
  @IsNotEmpty()
  @IsString()
    title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
    description?: string;

}
