import {
  Injectable,
  ExecutionContext,
  Logger,
  CanActivate,
} from '@nestjs/common';
import { AuthorizationService } from '../authorization.service';

@Injectable()
export class AuthGuard implements CanActivate {

  private readonly logger: Logger;
  private readonly authorizationService: AuthorizationService;

  constructor(authorizationService: AuthorizationService) {
    this.authorizationService = authorizationService;
    this.logger = new Logger(AuthGuard.name);
  }

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const http = context.switchToHttp().getRequest();
      if (!http.headers.authorization) {
        return false;
      }
      const [bearer, token] = http.headers.authorization.split(' ');
      if (bearer !== 'Bearer' || !token) {
        return false;
      }

      const userData = this.authorizationService.deocdeToken(token);
      if (!userData) {
        return false;
      }
      if (Date.now() / 1000 > userData.exp) {
        return false;
      }

      await this.authorizationService.getUser({ _id: userData._id, accessToken: token });

      http.userPayload = userData;

      return true;
    }
    catch (error) {
      this.logger.error(error);
      return false;
    }
  }

}
