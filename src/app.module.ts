import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './configs/config.module';
import { MongoConfig } from './configs/mongo.config';
import { AuthorizationsModule } from './modules/authorization/authorizations.module';
import { GroupsModule } from './modules/groups/groups.module';
import { TodosModule } from './modules/todos/todos.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync(({
      imports: [ConfigModule],
      useExisting: MongoConfig,
    })),
    AuthorizationsModule,
    TodosModule,
    UsersModule,
    GroupsModule,
  ],
})
export class AppModule {}
