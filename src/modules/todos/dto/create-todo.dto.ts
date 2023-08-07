import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateTodoDto {

  @ApiProperty({ example: 'ya gay', required: true })
  @IsNotEmpty()
  @IsString()
    title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
    description?: string;

}
