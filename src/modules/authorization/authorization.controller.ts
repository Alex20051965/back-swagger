import {
  Body,
  Controller,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../../schemas/users.schema';
import { AuthorizationService } from './authorization.service';
import { SignDto } from './dto/auth-sign-in.dto';
import { SignUpDto } from './dto/auth-sign-up.dto';
import { refreshDto } from './dto/refresh.dto';

@ApiTags('AUTHORIZATION')
@UsePipes(new ValidationPipe())
@Controller('authorization')
export class AuthorizationController {

  private readonly authorizationService: AuthorizationService;

  constructor(authorizationService: AuthorizationService) {
    this.authorizationService = authorizationService;
  }

  @Post('/sign-up')
  async signUp(@Body() body: SignUpDto): Promise<User> {
    const response = await this.authorizationService.signUp(body);
    return response;
  }

  @Post('/sign-in')
  async signIn(@Body() body: SignDto): Promise<User> {
    const response = await this.authorizationService.signIn(body);
    return response;
  }

  @Patch('/refresh')
  async refresh(@Body() body: refreshDto): Promise<User> {
    const response = await this.authorizationService.refresh(body);
    return response;
  }

}
