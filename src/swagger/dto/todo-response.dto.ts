
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class TodoData {

  @ApiProperty()
  public title!: string;

  @ApiProperty()
  public description?: string;

  @ApiProperty()
  public done?: string;

  @ApiProperty()
  public asignee: Types.ObjectId;

  @ApiProperty()
  public createdAt: Date;

  @ApiProperty({ default: new Date(Date.now()) })
  public deletedAt?: Date;


}
