import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateTodoDto {

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
  @IsString()
    done?: boolean;

}
