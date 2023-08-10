import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsMongoId } from 'class-validator';

export class ParamIdDto {

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
    id: string;

}
