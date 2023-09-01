import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { Types } from 'mongoose';
import { IPayloadResponse } from '../../models/responses/authorization.response';


export const GetUserId = createParamDecorator((_data: unknown, ctx: ExecutionContext): Types.ObjectId => {
  const request = ctx.switchToHttp().getRequest <FastifyRequest & { userPayload: IPayloadResponse }>();


  if (!request?.userPayload?._id) {
    throw new UnauthorizedException();
  }


  try {
    const objectId = new Types.ObjectId(request.userPayload._id);


    return objectId;
  }


  catch (error) {
    throw new Error('incorrect id');
  }
});
