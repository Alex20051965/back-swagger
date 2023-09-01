import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type GroupsDocument = Groups & Document;
@Schema()
export class Groups {

  @Prop({ required: true, ref: 'users' })
    admin: Types.ObjectId;

  @Prop({ default: [], ref: 'users' })
    participants: Types.ObjectId[];

  @Prop({ default: [], ref: 'todos' })
    todos: Types.ObjectId[];

}

export const GroupaSchema = SchemaFactory.createForClass(Groups);
