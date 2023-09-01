import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;
@Schema()
export class User {

  @Prop({ required: false })
    name: string;

  @Prop({ required: true })
    email: string;

  @Prop({ required: true })
    password: string;

  @Prop({ required: false, type: Array<Types.ObjectId>, ref: 'todos', default: [] })
    todos: Types.ObjectId[];

  @Prop({ required: false })
    accessToken: string;

  @Prop({ required: false })
    refreshToken: string;

  @Prop({ default: '', ref: 'group' })
    group : string;

}

export const UserSchema = SchemaFactory.createForClass(User);
