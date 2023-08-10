import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../../schemas/users.schema';
import { ParamIdDto } from '../../shared/dto/param-id.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './users.service';

@ApiTags('USERS')
@UsePipes(new ValidationPipe())
@Controller('users')
export class UserController {

  private readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  @Get('/')
  async getAllUsers(): Promise<User[]> {
    const response = await this.userService.findAll();
    return response;
  }

  @Get('/:id')
  async getUserById(@Param() param: ParamIdDto): Promise<User> {
    const response = await this.userService.findOne(param.id);
    return response;
  }

  @Post('/')
  async create(@Body() body: CreateUserDto): Promise<User> {
    const response = await this.userService.create(body);
    return response;
  }

  @Put('/:id')
  async update(@Param() param: ParamIdDto, @Body() body: UpdateUserDto): Promise<User> {
    const response = await this.userService.update(param.id, body);
    return response;
  }

  @Delete('/:id')
  async delete(@Param() param: ParamIdDto): Promise<void> {
    await this.userService.delete(param.id);
  }

}
