
import { ApiProperty } from '@nestjs/swagger';

export class User {

  @ApiProperty()
  public _id!: string;

  @ApiProperty()
  public name!: string;

  @ApiProperty()
  public email!: string;

  @ApiProperty()
  public title!: string;

  @ApiProperty()
  public done!: boolean;

  @ApiProperty()
  public deletedAt!: string;

  @ApiProperty()
  public createdAt!: string;

  @ApiProperty()
  public __v!: number;

}
