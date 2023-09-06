import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { IGetUsersRequest } from '../../../models/request/users.requests';
import { TramsformNum } from '../../../shared/transforms/transofrm-num';

export class GetUsersDto implements IGetUsersRequest {

  @ApiPropertyOptional({ example: '1' })
  @IsOptional()
  @Transform(TramsformNum)
    page: number;

  @ApiPropertyOptional({ example: '15' })
  @IsOptional()
  @Transform(TramsformNum)
    limit: number;

}
