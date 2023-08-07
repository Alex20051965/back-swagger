import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;
@Schema()
export class Todo {

  @Prop({ required: true })
    title: string;

  @Prop()
    description?: string;

  @Prop({ default: false })
    done?: boolean;

  @Prop({ default: new Date(Date.now()) })
    createdAt: Date;

  @Prop({ default: new Date(Date.now()) })
    deletedAt?: Date;

}

export const TodoSchema = SchemaFactory.createForClass(Todo);
