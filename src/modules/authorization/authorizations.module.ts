import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../schemas/users.schema';
import { AuthorizationController } from './authorization.controller';
import { AuthorizationService } from './authorization.service';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [
    AuthorizationController,
  ],
  providers: [
    AuthorizationService,
  ],
  exports: [AuthorizationService],
})
export class AuthorizationsModule {}
