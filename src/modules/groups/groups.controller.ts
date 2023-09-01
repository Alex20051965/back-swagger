import {
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Groups } from '../../schemas/groups.schema';
import { Todo } from '../../schemas/todos.schema';
import { GetUserId } from '../../shared/decorators/extract-user-id.decorator';
import { AuthGuard } from '../authorization/guard/authorization.guard';
import { GroupsService } from './groups.service';

@ApiTags('GROUPS')
@ApiSecurity('JWT')
@UsePipes(new ValidationPipe())
@UseGuards(AuthGuard)
@Controller('groups')
export class GroupsController {

  private readonly groupsService: GroupsService;

  constructor(groupsService: GroupsService) {
    this.groupsService = groupsService;
  }

  @Post('/')
  async createGroup(@GetUserId() id: string): Promise<Groups> {
    const group = await this.groupsService.createGroup(id);
    return group;
  }

  @Post('/add-todos')
  async addTodoToGroup(@GetUserId() id: string): Promise<Groups> {
    const group = await this.groupsService.createGroup(id);
    return group;
  }

  @Get('/')
  async getGroupTodos(@GetUserId() id: string): Promise<Todo[]> {
    const todos = await this.groupsService.getGroupTodos(id);
    return todos;
  }

  // @Put('/:id')
  // async addUserToGroup(@GetUserId() id: string, @Param() param: ParamIdDto): Promise<Groups> {
  //   const group = await this.groupsService.addUserToGroup(param.id, body);
  //   return group;
  // }

}
