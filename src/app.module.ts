import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './modules/todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    TodosModule,
  ],
})
export class AppModule {}
