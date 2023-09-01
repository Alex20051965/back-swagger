import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupaSchema, Groups } from '../../schemas/groups.schema';
import { User, UserSchema } from '../../schemas/users.schema';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Groups.name, schema: GroupaSchema }, { name: User.name, schema: UserSchema }]),
  ],
  controllers: [
    GroupsController,
  ],
  providers: [
    GroupsService,
  ],
})
export class GroupsModule {}
