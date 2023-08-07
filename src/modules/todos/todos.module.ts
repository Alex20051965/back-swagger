import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from '../../schemas/todos.schema';
import { TodoController } from './todos.controller';
import { TodoService } from './todos.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [
    TodoController,
  ],
  providers: [
    TodoService,
  ],
})
export class TodosModule {}
