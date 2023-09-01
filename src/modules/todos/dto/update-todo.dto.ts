import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsMongoId } from 'class-validator';

export class UpdateTodoDto {

  @ApiProperty({ example: 'todo-id', required: true })
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
    id: string;

  @ApiPropertyOptional({ example: 'ya gay', required: true })
  @IsNotEmpty()
  @IsString()
    title?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
    description?: string;

  @ApiPropertyOptional()
  @IsOptional()
    done?: boolean;


}
