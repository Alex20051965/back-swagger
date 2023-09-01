import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TodoDocument = Todo & Document;
@Schema()
export class Todo {

  @Prop({ required: true })
    title: string;

  @Prop()
    description?: string;

  @Prop({ default: false })
    done?: boolean;

  @Prop({ required: true, ref: 'users' })
    asignee: Types.ObjectId;

  @Prop({ default: new Date(Date.now()) })
    createdAt: Date;

  @Prop({ default: new Date(Date.now()) })
    deletedAt?: Date;

  @Prop({ default: [], ref: 'users' })
    todoUser: Types.ObjectId[];

}
export const TodoSchema = SchemaFactory.createForClass(Todo);
console.log('todo.shema otrabotala');
