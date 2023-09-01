import { Injectable } from '@nestjs/common';
import { IAuthConfig } from '../models/config/config.models';
import { ConfigService } from './config.service';

@Injectable()
export class AuthConfig implements IAuthConfig {

  public readonly accessSecret: string;
  public readonly refreshSecret: string;
  public readonly accessExpire: string;
  public readonly refreshExpire: string;

  constructor(configService: ConfigService) {
    this.accessSecret = configService.getString('AUTH_ACCESSSECRET');
    this.refreshSecret = configService.getString('AUTH_REFRESHSECRET');
    this.accessExpire = configService.getString('AUTH_ACCESSEXPIRE');
    this.refreshExpire = configService.getString('AUTH_REFRESHEXPIRE');
  }

}
