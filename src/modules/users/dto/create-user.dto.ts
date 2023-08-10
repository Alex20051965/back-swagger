import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateUserDto {

  @ApiProperty({ example: 'ya user', required: true })
  @IsNotEmpty()
  @IsString()
    title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
    description?: string;

}
